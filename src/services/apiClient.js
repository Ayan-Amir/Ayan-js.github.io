import axios from 'axios';

import { getFormDataFile } from '#/utils/helperFunctions';
import { axiosClient } from './useSetupAxios';

const getUrl = relativeUrl => `${import.meta.env.VITE_BASE_URL}${relativeUrl}`;

export const performGetRequest = ({ url, params = {} }) => axiosClient.get(getUrl(url), { params });

export const performPostRequest = ({ url, payload = {}, params = {} }) =>
  axiosClient.post(getUrl(url), payload, params);

export const performPutRequest = ({ url, payload = {}, params = {} }) =>
  axiosClient.put(getUrl(url), payload, { params });

export const performPatchRequest = ({ url, payload = {}, params = {} }) =>
  axiosClient.patch(getUrl(url), payload, { params });

export const performDeleteRequest = ({ url, payload = {}, params = {} }) =>
  axiosClient.delete(getUrl(url), { params: params, payload });

export const performUploadAttachments = ({ url, payload, onProgress, onCancel }) => {
  const cancelTokenSource = axios.CancelToken.source();

  const params = {
    onUploadProgress: ({ loaded, total }) => {
      onProgress((loaded / total) * 100);
    },
    cancelToken: cancelTokenSource.token,
  };

  onCancel(() => cancelTokenSource.cancel('Upload canceled by user'));

  return performPostRequest({
    url,
    payload: getFormDataFile(payload),
    params,
  });
};
