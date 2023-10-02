import { ChevronLeftCircle, Menu } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { useState, useEffect } from 'react';
import ThemeSwitcher from '../../ThemeSwitcher';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

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

  return (
    <nav className="relative flex w-full flex-row items-center justify-between bg-white shadow dark:bg-dark-box dark:shadow-slate-950">
      <div className="container flex w-[50%] items-center justify-start gap-2 p-2">
        <img
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
          alt=""
          width="50"
          height="40"
        />
        <Input className="bg-white ring-offset-blue-600 focus:ring-offset-1 focus-visible:ring-2 focus-visible:ring-offset-1 dark:bg-dark" />
      </div>
      <div className="flex w-[50%] items-center justify-end p-2">
        <div
          className="block cursor-pointer text-dark dark:text-white"
          onClick={handleToggle}
        >
          <Menu />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed ${
          toggleNav ? 'right-0' : 'right-[-120%]'
        } top-0 z-50 flex h-[100vh] w-[100vw] flex-col items-end bg-gray-900/20 transition-all duration-500 ease-in-out`}
        onClick={handleOutsideClick}
      >
        <div className="h-full w-full bg-gray-800 p-4 text-white dark:bg-dark dark:text-white md:w-2/4">
          <div className="flex flex-row items-center">
            <button
              onClick={handleToggle}
              className="my-6 cursor-pointer text-white dark:text-white"
            >
              <ChevronLeftCircle />
            </button>
            <p className="flex-1 text-center">logo</p>
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
    </nav>
  );
};

export default Navbar;
