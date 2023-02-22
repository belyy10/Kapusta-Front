import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./Header'));
const Registration = lazy(() => import('../pages/Registration'));
const Main = lazy(() => import('../pages/Main'));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="registration" element={<Registration />} />
          <Route path="main" element={<Main />} />

          <Route path="*" element={<Main />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
