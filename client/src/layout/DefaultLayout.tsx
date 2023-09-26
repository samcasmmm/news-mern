import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DefaultLayout = () => {
  return (
    <div className='w-full h-full dark:bg-slate-950 transition-all ease-in-out duration-300'>
      <Navbar />
      <main className='mx-auto max-w-screen-2xl min-h-[50vh]'>
        <Outlet />
      </main>
      <p>Footer</p>
    </div>
  );
};

export default DefaultLayout;
