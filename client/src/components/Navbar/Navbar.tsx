import ThemeSwitcher from '../ThemeSwitcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const Navbar = () => {
  return (
    <nav className='bg-white dark:bg-dark-box shadow dark:shadow-slate-950'>
      <div className='container flex flex-row items-center justify-between py-4 '>
        <p className='dark:text-white text-black'>Logo</p>
        <div className='flex items-center justify-center gap-4'>
          <DropdownMenu>
            <DropdownMenuTrigger className='hover:text-primarytext'>
              Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent className='dark:bg-dark '>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>data</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
