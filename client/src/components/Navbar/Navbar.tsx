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
    <nav className='bg-white dark:bg-dark-box shadow dark:shadow-slate-950 flex sm:flex-row flex-col items-center justify-center'>
      <div className='container flex flex-row items-center justify-between py-4 flex-1 order-3'>
        <div className='flex items-center justify-between sm:justify-center gap-4 w-full'>
          <p className='dark:text-white text-black hidden sm:block'>Logo</p>
          <DropDownComponent title={'Trending'} list={menuItems} />
          <DropDownComponent title={'Categories'} list={menuItems} />
        </div>
      </div>
      <p className='dark:text-white text-black block sm:hidden order-1'>Logo</p>
      <div className='flex flex-row items-center justify-center p-4 gap-2 flex-1 order-3 w-full'>
        <Input
          type='text'
          className='focus:ring-offset-0 focus-visible:ring-offset-0 bg-white dark:bg-dark border-slate-700'
        />
        <Button>Search</Button>
      </div>
    </nav>
  );
};

export default Navbar;
