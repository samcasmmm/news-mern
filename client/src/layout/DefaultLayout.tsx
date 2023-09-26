import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Navbar/Header';

const DefaultLayout = () => {
  return (
    <div className='w-full h-full '>
      <Header />
      <Navbar />
      <main className='mx-auto max-w-screen-2xl min-h-[50vh]'>
        <Outlet />
      </main>
      <p>Footer</p>
    </div>
  );
};

export default DefaultLayout;
