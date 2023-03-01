import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useMedia } from 'hooks/useMedia';

import CreateTransactions from './CreateTransaction/CreateTransaction';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import { fetchUserTransactions } from 'redux/transactions/transactionsOperations';

const Header = lazy(() => import('./Header'));
const Main = lazy(() => import('../pages/Main'));
const Reports = lazy(() => import('../pages/Reports'));
const Login = lazy(() => import('../pages/Login'));
const Mobile = lazy(() => import('../pages/Mobile'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(refreshUser());

    dispatch(
      fetchUserTransactions({
        type: 'expenses',
        controller,
      })
    );
    dispatch(
      fetchUserTransactions({
        type: 'incomes',
        controller,
      })
    );

    return () => controller.abort();
  }, [dispatch]);


  const {isMobile} = useMedia();


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
            element={ isMobile ? <PrivateRoute path="transactions" component={<Mobile/>} redirectTo="/login" /> 
            : <PrivateRoute component={<Main />} redirectTo="/login" />}
          >

            <Route path="expenses" element={ isMobile ? (<><Mobile/></>) : (<><CreateTransactions /></>)} />
            <Route path="incomes" element={ isMobile ? (<><Mobile/></>) : (<><CreateTransactions /></>)} />
          </Route>
          <Route
            path="reports"
            element={
              <PrivateRoute component={<Reports />} redirectTo="/login" />
            }
          />
          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
