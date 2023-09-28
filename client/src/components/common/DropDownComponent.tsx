import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type TDropdownProps = {
  title: string;
  subtitle?: string;
  list: TDropdownList[];
};

type TDropdownList = {
  label: string;
  onclick: () => void;
};

const DropDownComponent: React.FC<TDropdownProps> = ({
  title,
  subtitle,
  list,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='hover:text-primarytext'>
        {title}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='dark:bg-dark'>
        {subtitle && <DropdownMenuLabel>{subtitle}</DropdownMenuLabel>}
        {subtitle && <DropdownMenuSeparator />}
        {list.map((item: TDropdownList, index: number) => (
          <DropdownMenuItem key={index} onClick={item.onclick}>
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownComponent;
