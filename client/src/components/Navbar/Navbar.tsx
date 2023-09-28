import DropDownComponent from '../common/DropDownComponent';
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
    <nav className='bg-white dark:bg-dark-box shadow dark:shadow-slate-950'>
      <div className='container flex flex-row items-center justify-between py-4 '>
        <p className='dark:text-white text-black'>Logo</p>
        <div className='flex items-center justify-center gap-4'>
          <DropDownComponent title={'Trending'} list={menuItems} />
          <DropDownComponent title={'Categories'} list={menuItems} />
        </div>
        <div className='flex flex-row items-center justify-center'>
          <Input
            type='text'
            className='focus:ring-offset-0 focus-visible:ring-offset-0 bg-white dark:bg-dark border-slate-700'
          />
          icon
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
