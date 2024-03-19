import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, useLocation } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import routes from '@/routes';
import SignIn from '@/page/SignIn';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="signIn" element={<SignIn />} />
          <Route element={<DefaultLayout />}>
            {routes.map(({ path, component: Component }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<p>Loading..</p>}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
