import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between px-4 py-4 text-red-600 dark:text-emerald-500'>
      <p className=''>Logo</p>
      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
