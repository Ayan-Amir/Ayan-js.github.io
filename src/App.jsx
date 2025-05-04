import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CacheBuster from 'react-cache-buster';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AppContextProvider } from '#/context';
import { router } from '#/routes';
import { useSentry, useSetupAxios } from '#/services';
import { version } from '../package.json';

function App() {
  const queryClient = new QueryClient();

  const isCacheBusterEnable = !!Number(import.meta.env.VITE_CACHE_BUSTER);

  useSetupAxios();
  useSentry();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <CacheBuster currentVersion={version} isEnabled={isCacheBusterEnable} metaFileDirectory={'/app'}>
          <RouterProvider router={router} />
        </CacheBuster>
      </AppContextProvider>
      <ToastContainer />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
