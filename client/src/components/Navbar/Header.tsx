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
    <div className='bg-dark-box2 p-4'>
      <div className='container flex flex-row justify-between px-0 xsm:px-4'>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Clock4 color='white' className='fill-blue-600' />
          <p className='text-sm'>{formattedDate}</p>
        </div>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Facebook
            color='white'
            className='cursor-pointer hover:fill-blue-500 scale-75 hover:scale-110 ease-in-out  transition duration-300 '
          />
          <Instagram
            color='white'
            className='cursor-pointer scale-75 hover:scale-110 ease-in-out hover:fill-rose-500 transition duration-300'
          />
          <Twitter
            color='white'
            className='cursor-pointer scale-75 hover:scale-110 ease-in-out hover:fill-blue-500 transition duration-300'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
