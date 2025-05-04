import { Suspense, lazy } from 'react';

import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { PrivateRoute } from './PrivateRoute';
import { ROUTES } from './Routes';

const Layout = lazy(() => import('#/common/components/Layout'));
const Login = lazy(() => import('#/pages/login/components/Login'));

const withSuspense = Component => (
  <Suspense fallback={'loading ...'}>
    <Component />
  </Suspense>
);

const createPrivateRoute = Component => <PrivateRoute>{withSuspense(Component)}</PrivateRoute>;

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.LAYOUT} element={createPrivateRoute(Layout)}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>

      <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
    </>
  ),
  { basename: '/app' }
);
