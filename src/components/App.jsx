import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Header = lazy(() => import('./Header'));
const Registration = lazy(() => import('../pages/Registration'));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="registration" element={<Registration />} />

          <Route path="*" element={<Registration />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
