import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className=''>
      <p>Navbar</p>
      <main className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
        <Outlet />
      </main>
      <p>Footer</p>
    </div>
  );
};

export default DefaultLayout;
