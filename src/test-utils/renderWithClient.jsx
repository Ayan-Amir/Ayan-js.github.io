import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import { AppContextProvider } from '#/context';

function RenderWithClient({ children }) {
  const queryClint = new QueryClient();

  const GOOGLE_OAUTH_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={GOOGLE_OAUTH_CLIENT_ID}>
      <QueryClientProvider client={queryClint}>
        <AppContextProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </AppContextProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default RenderWithClient;
