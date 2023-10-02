import { Clock4, Instagram, Facebook, Twitter } from 'lucide-react';

const Header = () => {
  function getCurrentDate() {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const formattedDate = `${dayOfWeek}, ${month} ${day}`;

    return { formattedDate, dayOfWeek, month, day, year };
  }
  const { formattedDate } = getCurrentDate();
  return (
    <div className="bg-gray-200 p-4 dark:bg-dark-box2">
      <div className="container flex flex-row justify-between px-0 xsm:px-4">
        <div className="flex flex-row items-center justify-center gap-4">
          <Clock4 color="white" className="fill-blue-600" />
          <p className="text-sm text-black dark:text-white">{formattedDate}</p>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Facebook className="scale-75 cursor-pointer text-gray-600 transition duration-300  ease-in-out hover:scale-110  hover:fill-blue-500 dark:text-white" />
          <Instagram className="scale-75 cursor-pointer text-gray-600 transition duration-300 ease-in-out hover:scale-110 hover:fill-rose-500 dark:text-white" />
          <Twitter
            // color='white'
            className="scale-75 cursor-pointer text-gray-600 transition duration-300 ease-in-out hover:scale-110  hover:fill-blue-500 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
