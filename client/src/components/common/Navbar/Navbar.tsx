import { Bell, ChevronLeftCircle, Menu } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { useState, useEffect } from 'react';
import ThemeSwitcher from '../../ThemeSwitcher';
import UserMenu from './UserMenu';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const isLoggedIn = true;

  const handleToggle = () => setToggleNav(!toggleNav);
  const closeToggle = () => setToggleNav(false);
  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    if (e.currentTarget === e.target) {
      closeToggle();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', closeToggle);
    return () => {
      window.removeEventListener('scroll', closeToggle);
    };
  });

  const NotLoggedInComponent = () => {
    return (
      <div className="flex w-[50%] items-center justify-end gap-2">
        <Button
          className="m-0 hover:bg-blue-600/10 hover:text-blue-600"
          variant={'link'}
        >
          Log In
        </Button>
        <Button
          className="hover:outline-1s m-0 border-blue-600 text-blue-600 hover:bg-blue-700 hover:text-white"
          variant={'outline'}
        >
          Create account
        </Button>
        <div
          className="cursor-pointer text-dark dark:text-white"
          onClick={handleToggle}
        >
          <Menu />
        </div>
      </div>
    );
  };
  const LoggedInComponent = () => {
    return (
      <div className="flex w-[50%] items-center justify-end gap-2">
        <Button
          className=" m-0 hidden w-max border-blue-600 p-2 text-blue-600 hover:bg-blue-700 hover:text-white sm:block"
          variant={'outline'}
        >
          Create Post
        </Button>
        <Button
          className="m-0 hidden border-blue-600 text-black hover:bg-blue-700/20 hover:text-blue-600 dark:text-white sm:block"
          variant={'ghost'}
        >
          <Bell />
        </Button>

        <UserMenu />

        <div
          className="cursor-pointer text-dark dark:text-white"
          onClick={handleToggle}
        >
          <Menu />
        </div>
      </div>
    );
  };

  return (
    <nav className="relative flex w-full flex-row items-center justify-between bg-white shadow dark:bg-dark-box dark:shadow-slate-950">
      <div className="container flex p-2">
        <div className="flex w-[50%] items-center justify-start gap-4 ">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt=""
            width="50px"
            height="40px"
          />
          <Input
            className="out hidden max-w-[420px] bg-white  transition focus:ring-offset-1 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-dark sm:block"
            placeholder="Search . . . "
          />
        </div>
        {isLoggedIn ? <LoggedInComponent /> : <NotLoggedInComponent />}

        {/* Sidebar */}
        <div
          className={`fixed ${
            toggleNav ? 'right-0' : 'right-[-120%]'
          } top-0 z-50 flex h-[100vh] w-[100vw] flex-col items-end bg-gray-900/20 transition-all duration-500 ease-in-out`}
          onClick={handleOutsideClick}
        >
          <div className="h-full w-full bg-white p-4 text-black dark:bg-dark dark:text-white md:w-2/4">
            <div className="flex w-full flex-row items-center justify-between">
              <button
                onClick={handleToggle}
                className="my-6 cursor-pointer text-black dark:text-white"
              >
                <ChevronLeftCircle />
              </button>
              <img
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt=""
                width="50"
                height="40"
              />
              <ThemeSwitcher />
            </div>
            <div className="order-3  flex w-full flex-1 flex-row items-center justify-center gap-2 md:order-none">
              <Input
                type="text"
                className="border-slate-700 bg-white focus:ring-offset-0 focus-visible:ring-offset-0 dark:bg-dark "
              />
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
