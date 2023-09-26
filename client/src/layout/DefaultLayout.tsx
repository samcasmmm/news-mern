import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const DefaultLayout = () => {
  return (
    <div className='w-full h-full bg-slate-100 dark:bg-slate-950'>
      <Navbar />
      <main className='mx-auto max-w-screen-2xl min-h-[50vh]'>
        <Outlet />
      </main>
      <p>Footer</p>
    </div>
  );
};

export default DefaultLayout;
