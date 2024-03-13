import { Bell, Search } from '@/components/common/Icons';
import Avatar from './common/Avatar';
const Navbar = () => {
  return (
    <div className="border-b border-b-gray-300 bg-white p-2">
      <div className="flex items-center justify-between">
        <div className="">
          <img src="/logo_dark.png" alt="logo" className="w-32" />
        </div>
        <div className="flex items-center justify-center space-x-3">
          <Search />
          <Bell />
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
