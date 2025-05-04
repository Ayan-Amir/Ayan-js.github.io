import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ROUTES } from '#/routes';
import { apiEndpoints, usePostMutation } from '#/services';
import { ACCESS_TOKEN } from '#/utils/constants';
import { setLocalStorageItem } from '#/utils/localStorage';

function useLoginWithGoogle() {
  const navigate = useNavigate();

  const onSuccess = response => {
    const { data: { accessToken, user } = {} } = response || {};

    const { isSubscriptionPurchased, isStaff } = user || {};
    setLocalStorageItem(ACCESS_TOKEN, accessToken);
    const navigationRoute = isStaff ? ROUTES.DASHBOARD : isSubscriptionPurchased ? ROUTES.LAYOUT : ROUTES.MEMBERSHIP;
    navigate(navigationRoute, { replace: true });
    window.location.reload();
  };

  const onError = err => {
    const { response: { data } = {} } = err || {};
    const { non_field_errors, detail } = data || {};
    toast.error(non_field_errors?.[0] || detail);
  };

  const { mutate: googleLogin, isPending: isGoogleLoginPending } = usePostMutation({
    url: apiEndpoints.GOOGLE_LOGIN,
    onSuccess,
    onError,
  });

  const handleOAuthLogin = token => {
    googleLogin({
      payload: { accessToken: token },
    });
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async tokenResponse => handleOAuthLogin(tokenResponse.access_token),
  });

  return { handleGoogleLogin, isGoogleLoginPending };
}

export default useLoginWithGoogle;
