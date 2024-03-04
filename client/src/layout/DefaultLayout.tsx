import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <main className="h-full w-full ">
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
