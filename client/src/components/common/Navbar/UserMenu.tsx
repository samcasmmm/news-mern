import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';

// type Props = {};

const UserMenu = () => {
  return (
    <div className="mt-1 w-max">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="overflow-hidden rounded-full">
            <img
              src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
              alt=""
              width="30px"
              height="30px"
              className="rounded-full"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 w-[200px] dark:border-white/10 dark:bg-dark md:min-w-[200px]">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuItem className="flex cursor-default flex-col items-start">
            <p className="font-bold">Sameer Bagwan</p>
            <p className="font-light">@samcasmmm</p>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="dark:bg-white/10" />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuSeparator className="dark:bg-white/10" />
          <DropdownMenuItem className="focus:bg-rose-600/20 focus:text-rose-600">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
