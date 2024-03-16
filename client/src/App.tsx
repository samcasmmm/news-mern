import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/layout/DefaultLayout';
import routes from '@/routes';
import SignIn from '@/page/SignIn';

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <Routes>
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
    </>
  );
};

export default App;
