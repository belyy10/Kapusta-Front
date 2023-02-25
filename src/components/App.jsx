import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Balance from './Balance';

const Header = lazy(() => import('./Header'));
const Main = lazy(() => import('../pages/Main'));
const Reports = lazy(() => import('../pages/Reports'));
const BalancePage = lazy(() => import('../pages/BalancePage'));
const Login = lazy(() => import('../pages/Login'));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route 
            path="balance" 
            element={
              <RestrictedRoute component={BalancePage} redirectTo="/balance" />
            }
            />
          <Route
            path="login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/main" />
            }
          />
          <Route
            path="main"
            element={<PrivateRoute component={<Main />} redirectTo="/login" />}
          />
          <Route
            path="reports"
            element={
              <PrivateRoute component={<Reports />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<Balance />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
