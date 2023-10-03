import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/';

const DefaultLayout = () => {
  return (
    <div className="h-full w-full ">
      <Navbar />
      <main className="mx-auto min-h-[50vh] max-w-screen-2xl">
        <Outlet />
      </main>
      {/* <p>Footer</p> */}
    </div>
  );
};

export default DefaultLayout;
