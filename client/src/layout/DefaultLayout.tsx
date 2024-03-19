import Navbar from '@/components/Navbar';
import { Outlet } from 'react-router-dom';
import Transition from './Transition';

const DefaultLayout = () => {
  return (
    <main className="h-full w-full ">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Transition(DefaultLayout);
