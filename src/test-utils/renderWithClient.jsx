import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';

import { AppContextProvider } from '#/context';

function RenderWithClient({ children }) {
  const queryClint = new QueryClient();

  return (
    <QueryClientProvider client={queryClint}>
      <AppContextProvider>
        <MemoryRouter>{children}</MemoryRouter>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default RenderWithClient;
