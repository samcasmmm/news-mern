import React from 'react';

const Sidebar = () => {
  const ListItem = (index) => (
    <li
      key={index}
      className="my-2 w-full cursor-pointer rounded-md bg-gray-200/60 p-2 text-center text-black transition-all duration-200 hover:bg-gray-300 dark:bg-gray-500/60 dark:text-white "
    >
      HEllo
    </li>
  );
  return (
    <div className="w-full">
      <ul>
        {Array.from({ length: 6 }).map((item, index) => (
          <ListItem index={index} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
