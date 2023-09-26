import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import routes from './routes';

const App = () => {
  return (
    <>
      <Toaster position='top-right' reverseOrder={true} />
      <Routes>
        <Route element={<DefaultLayout />}>
          {routes.map(({ path, component: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Suspense>
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
