import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Header = lazy(() => import('./Header'));
const Main = lazy(() => import('../pages/Main'));
const Reports = lazy(() => import('../pages/Reports'));
const Login = lazy(() => import('../pages/Login'));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="login"
            element={<RestrictedRoute component={Login} redirectTo="/main" />}
          />
          <Route
            path="main"
            element={<PrivateRoute component={Main} redirectTo="/login" />}
          />
          <Route
            path="reports"
            element={<PrivateRoute component={Reports} redirectTo="/login" />}
          />
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
