import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggle = () => setToggleNav(!toggleNav);
  const closeToggle = () => setToggleNav(false);
  // console.log(window.scroll > 10);
  useEffect(() => {
    window.addEventListener('scroll', closeToggle);
    return () => {
      window.removeEventListener('scroll', closeToggle);
    };
  });

  return (
    <nav className="relative flex w-full flex-row items-center justify-center bg-white shadow dark:bg-dark-box dark:shadow-slate-950">
      <div className="container flex w-full justify-between p-4">
        <p>Logo</p>
        <div className="block" onClick={handleToggle}>
          open
        </div>
      </div>
      <div
        className={`fixed ${
          toggleNav ? 'right-0' : 'right-[-120%]'
        } top-0 flex h-[100vh] w-[100vw] flex-col items-end bg-gray-900/20 transition-all duration-500 ease-in-out`}
      >
        <div className="h-full w-full bg-slate-800 md:w-2/4">
          <button onClick={handleToggle}>close</button>
          <div className="order-3  flex w-full flex-1 flex-row items-center justify-center gap-2 p-4 md:order-none">
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
