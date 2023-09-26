import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-between bg-slate-900 px-4 py-4'>
      <p className='text-white'>Logo</p>
      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
