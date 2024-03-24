import { Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, useLocation } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import routes from '@/routes';
import SignIn from '@/page/SignIn';
import { AnimatePresence } from 'framer-motion';
import SignUp from '@/page/SignUp';
import ProtectedRoute from '@/routes/ProtectedRoute';
import { useAppSelector } from '@/hooks/useAppState';

const App = () => {
  const location = useLocation();

  const { isAuthenticated } = useAppSelector((state) => state.Auth);

  useEffect(() => {
    console.log('isAuthenticated', isAuthenticated);
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route element={<DefaultLayout />}>
            {routes.map(
              ({ path, component: Component, routeProtection }, index) => (
                <Route
                  key={index}
                  path={path}
                  element={
                    routeProtection ? (
                      <ProtectedRoute
                        element={<Component />}
                        isAuthenticated={isAuthenticated}
                      />
                    ) : (
                      <Suspense fallback={<p>Loading..</p>}>
                        <Component />
                      </Suspense>
                    )
                  }
                />
              ),
            )}
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
