import React from 'react';
import { cn } from '../../libs/utils';

interface ListItemProps {
  index: number;
  title: string;
  className?: string;
}

const menuItems = [
  { title: 'Home' },
  { title: 'Podcasts' },
  { title: 'Videos' },
  { title: 'Tags' },
  { title: 'FAQ' },
  { title: 'Forem Shop' },
  { title: 'Advertise on DEV' },
  { title: 'About' },
  { title: 'Contact' },
  { title: 'Guides' },
  { title: 'Software comparisons' },
  { title: 'Other' },
  { title: 'Code of Conduct' },
  { title: 'Privacy Policy' },
  { title: 'Terms of use' },
];

const ListItem: React.FC<ListItemProps> = ({ index, title, className }) => (
  <li
    key={index}
    className={`my-2 w-full cursor-pointer rounded-md bg-gray-200/60 p-2 text-center text-black transition-all duration-200 hover:bg-gray-300 dark:bg-gray-500/60 dark:text-white dark:hover:bg-gray-700 ${cn(
      className,
    )}`}
  >
    {title}
  </li>
);

const Sidebar = () => {
  return (
    <div className="w-full">
      <ul>
        {menuItems.map((item, index) => (
          <ListItem index={index} title={item.title} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
