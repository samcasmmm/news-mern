import React from 'react';
import { Separator } from '../index';

// type Props = {};
interface IRightBarBox {
  title: string;
}

const RightBarBox = ({}: IRightBarBox) => {
  return (
    <div className="p-2">
      <div className="">
        <p>Active discussions</p>
        <Separator />
        {}
      </div>
    </div>
  );
};

const RightSidebar = () => {
  return (
    <div className="w-full bg-white">
      <RightBarBox />
    </div>
  );
};

export default RightSidebar;
