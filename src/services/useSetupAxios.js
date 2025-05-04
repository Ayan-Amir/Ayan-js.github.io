import axios from 'axios';
import * as caseConverter from 'change-object-case';
import { startsWith } from 'lodash';
import { toast } from 'react-toastify';

import { ACCESS_TOKEN, ERROR_MESSAGE, ERROR_STATUS_401, ERROR_STATUS_404, ERROR_STATUS_500 } from '#/utils/constants';
import { getLocalStorageItem } from '#/utils/localStorage';

const options = { recursive: true, arrayRecursive: true };

let errorDisplayed = false;

export const axiosClient = axios.create({
  withCredentials: true,
});

export function useSetupAxios() {
  axiosClient.interceptors.request.use(config => {
    errorDisplayed = false;
    const accessToken = getLocalStorageItem(ACCESS_TOKEN);

    if (accessToken) config.headers.Authorization = `JWT ${accessToken}`;

    if (!(config?.data instanceof FormData)) {
      const caseConvertedData = caseConverter.snakeKeys(config?.data, options);
      config.data = caseConvertedData;
    }

    const caseConvertedData = caseConverter.snakeKeys(config.params);
    config.params = caseConvertedData;

    return config;
  });

  axiosClient.interceptors.response.use(
    response => {
      errorDisplayed = false;
      const caseConvertedData = caseConverter.camelKeys(response?.data, options);
      response.data = caseConvertedData;
      return response;
    },
    error => {
      const { response: { status } = {} } = error;

      if (!errorDisplayed) {
        if (status === ERROR_STATUS_401) {
          localStorage.clear();
          window.location.reload();
          errorDisplayed = true;
        } else if (startsWith(status, ERROR_STATUS_500)) {
          toast.error(ERROR_MESSAGE);
          errorDisplayed = true;
        }
      }
      if (status === ERROR_STATUS_404) {
        window.location.href = `/app${ROUTES.PAGE_NOT_FOUND}`;
      }

      return Promise.reject(error);
    }
  );

  return;
}
