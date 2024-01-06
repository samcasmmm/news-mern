// import React from 'react'

// type Props = {}

const NewsCard = () => {
  return (
    <div className=" my-4 overflow-hidden rounded-md bg-white dark:bg-dark-box">
      <div className="">
        <div className="">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--h_o-EqDF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p8n7mww1xl6meh6rvd8l.png"
            alt=""
          />
        </div>
        <div className="">
          <div className="flex flex-row items-center">
            <div className="m-2 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-[2px] border-gray-700 bg-white  dark:bg-dark-box2">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--2iV087_Q--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1017870/de709ca6-68d0-4fa5-a6ef-1737306945c5.png"
                alt=""
                className=""
              />
            </div>
            <div className="">
              <p className="text-lg font-semibold ">Kevin Naidoo</p>
              <p className="">{`Jan 4 [1 Day ago]`}</p>
            </div>
          </div>
          <div className=" m-4">
            <p className="py-2 text-3xl font-bold">
              How to build your own SAAS business
            </p>

            <div className="flex flex-row">
              <p>#django</p>
              <p>#startup</p>
              <p>#career</p>
              <p>#productivity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
