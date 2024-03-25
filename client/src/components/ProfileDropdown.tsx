import IsLoggedInWrapper from '@/components/common/IsLoggedInWrapper';
import AvatarWrapper from '@/components/common/Avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppDispatch } from '@/hooks/useAppState';
import { logout } from '@/app/features/Auth.slice';

const ProfileDropdown = () => {
  const dispatch = useAppDispatch();
  return (
    <IsLoggedInWrapper>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none ">
          <AvatarWrapper
            src="https://miro.medium.com/v2/resize:fill:64:64/0*LZxbvU7VIIZ3RMFi"
            alt=""
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            Subscription
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer bg-red-200 duration-150 hover:bg-red-600 hover:text-white"
            onClick={() => dispatch(logout())}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </IsLoggedInWrapper>
  );
};

export default ProfileDropdown;
