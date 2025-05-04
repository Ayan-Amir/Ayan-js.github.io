import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { Layout } from '#/pages/layout';
import { ROUTES } from './Routes';

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path={ROUTES.PORTFOLIO} element={<Layout />} />),
  { basename: '/app' }
);
