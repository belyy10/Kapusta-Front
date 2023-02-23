import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Header = lazy(() => import('./Header'));
const Registration = lazy(() => import('../pages/Registration'));
const Main = lazy(() => import('../pages/Main'));
const Reports = lazy(() => import('../pages/Reports'));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="registration"
            element={
              <RestrictedRoute component={Registration} redirectTo="/main" />
            }
          />
          <Route
            path="main"
            element={<PrivateRoute component={Main} redirectTo="/login" />}
          />
          <Route
            path="reports"
            element={<PrivateRoute component={Reports} redirectTo="/login" />}
          />

          <Route path="*" element={<Registration />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
