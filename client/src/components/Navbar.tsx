import { Bell, Search, Pen } from '@/components/common/Icons';
import AvatarWrapper from '@/components/common/Avatar';
import IconWrapper from '@/components/common/IconWrapper';
import IsLoggedInWrapper from '@/components/common/IsLoggedInWrapper';
import ProfileDropdown from '@/components/ProfileDropdown';

const Navbar = () => {
  return (
    <div className="border-b border-b-gray-300 bg-white p-2">
      <div className="container flex items-center justify-between">
        <div className="">
          <img src="/logo_dark.png" alt="logo" className="w-32" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <IsLoggedInWrapper>
            <IconWrapper icon={Pen} />
          </IsLoggedInWrapper>
          <IconWrapper icon={Search} />
          <IconWrapper icon={Bell} />
          <ProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
