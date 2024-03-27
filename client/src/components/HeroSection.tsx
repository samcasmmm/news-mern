import React from 'react';

const CategoryName: React.FC<{ name: string }> = ({ name }) => (
  <span className="rounded-sm bg-rose-600 p-2 px-4 text-white">
    {name.charAt(0).toUpperCase() + name.slice(1)}
  </span>
);

const HeroSection = () => (
  <div className=" flex w-full flex-col items-center justify-center  md:flex-row">
    <div className="group flex h-full w-full flex-col items-start justify-start gap-4 p-4">
      <CategoryName name="science" />
      <p className="text-3xl font-bold transition-all duration-300 group-[]:hover:text-red-400 md:text-[2.5rem]">
        Science Scientists Develop Artificial Leaf That Turns Carbon Dioxide
        into Fuel
      </p>
      <p>
        In the face of climate change, scientists around the world are looking
        for ways to mitigate the negative impacts of human activity on the
        environment.
      </p>
    </div>
    <div className="flex h-full w-full items-center justify-center p-4">
      <img
        src="https://assets-global.website-files.com/6457af175d2f1133b79ecaa8/645dd15ad70f00fded732de1_science-thumb-01.jpg"
        alt="banner"
        className="h-full w-[460px] rounded-md md:h-[470px] md:w-[618px]"
      />
    </div>
  </div>
);

export default HeroSection;
