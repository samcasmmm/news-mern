import { Clock4, Instagram, Facebook, Twitter } from 'lucide-react';
import React from 'react';

const Header = () => {
  return (
    <div className='bg-dark-box p-4'>
      <div className='container flex flex-row justify-between'>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Clock4 color='white' className='fill-blue-600' />
          <p className='text-sm'>TuesDay, Sep 25, 2023</p>
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
