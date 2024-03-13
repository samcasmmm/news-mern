import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <main className="h-full w-full ">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
