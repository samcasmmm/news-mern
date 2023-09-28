import DropDownComponent from '../common/DropDownComponent';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const menuItems = [
  {
    label: 'Item 1',
    onclick: () => {
      console.log('Item 1 clicked');
    },
  },
  {
    label: 'Item 2',
    onclick: () => {
      console.log('Item 2 clicked');
    },
  },
];

const Navbar = () => {
  return (
    <nav className="flex flex-col items-center justify-center bg-white shadow dark:bg-dark-box dark:shadow-slate-950 sm:flex-row">
      <div className="container order-3 flex flex-1 flex-row items-center justify-between py-4">
        <div className="flex w-full items-center justify-between gap-4 sm:justify-center">
          <p className="hidden cursor-pointer text-black dark:text-white sm:block">
            Logo
          </p>
          <DropDownComponent title={'Trending'} list={menuItems} />
          <DropDownComponent title={'Categories'} list={menuItems} />
        </div>
      </div>
      <p className="flex-1 text-black  dark:text-white">Logo</p>
      <div className="flex w-full flex-1 flex-row items-center justify-center gap-2 p-4">
        <Input
          type="text"
          className="border-slate-700 bg-white focus:ring-offset-0 focus-visible:ring-offset-0 dark:bg-dark"
        />
        <Button>Search</Button>
      </div>
    </nav>
  );
};

export default Navbar;
