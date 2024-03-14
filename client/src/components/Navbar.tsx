import { Bell, Search, Pen } from '@/components/common/Icons';
import AvatarWrapper from './common/Avatar';
import IconWrapper from './common/IconWrapper';
const Navbar = () => {
  return (
    <div className="border-b border-b-gray-300 bg-white p-2">
      <div className="flex items-center justify-between">
        <div className="">
          <img src="/logo_dark.png" alt="logo" className="w-32" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <IconWrapper icon={Pen} />
          <IconWrapper icon={Search} />
          <IconWrapper icon={Bell} />
          <AvatarWrapper
            src="https://miro.medium.com/v2/resize:fill:64:64/0*LZxbvU7VIIZ3RMFi"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
