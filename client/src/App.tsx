import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';

const App = () => {
  return (
    <>
      <Toaster position='top-right' reverseOrder={true} />
      <Routes>
        <Route index element={<DefaultLayout />}></Route>
      </Routes>
    </>
  );
};

export default App;
