import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useEffect } from 'react';
import CreateExpenses from './Expenses/Expenses';
import CreateIncomes from './Incomes/Incomes';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';

const Header = lazy(() => import('./Header'));
const Main = lazy(() => import('../pages/Main'));
const Reports = lazy(() => import('../pages/Reports'));
const Login = lazy(() => import('../pages/Login'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            path="login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/main" />
            }
          />
          <Route
            path="main"
            element={<PrivateRoute component={<Main />} redirectTo="/login" />}
          >
            <Route path="expenses" element={<CreateExpenses />} />
            <Route path="incomes" element={<CreateIncomes />} />
          </Route>
          <Route
            path="reports"
            element={
              <PrivateRoute component={<Reports />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
