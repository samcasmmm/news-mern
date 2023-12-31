import { Separator } from '../index';

interface IContent {
  id: number;
  title: string;
  link: string;
  comments: number;
}

interface IRightBarBox {
  title: string;
  content: IContent[];
}

const RightBarBox = ({ title, content }: IRightBarBox) => {
  return (
    <div className="my-2 rounded-sm bg-white py-2 dark:bg-gray-600/70">
      <p className="py-4 pl-4 text-xl font-semibold text-gray-800/80 dark:text-white">
        {title}
      </p>
      <Separator />
      <div className="">
        <div className="content-section">
          {content.map((item, index) => (
            <>
              <div key={index} className="p-2 ">
                <a
                  href={item.link}
                  className=" transition-all duration-200 hover:text-blue-600"
                  target="_blank"
                >
                  {item.title}
                </a>
                <p className="mt-2 cursor-pointer text-sm text-gray-500 transition-all duration-200 dark:hover:text-white">
                  Comments: {item.comments}
                </p>
              </div>
              {index !== content.length - 1 && <Separator />}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const RightSidebar = () => {
  const sampleContent: IContent[] = [
    {
      id: 1,
      title: 'Popularity is not Efficiency: Solid.js vs React.js',
      link: 'https://samplelink1.com',
      comments: 57,
    },
    {
      id: 2,
      title: 'How to build your own SAAS business',
      link: 'https://samplelink2.com',
      comments: 2,
    },
    {
      id: 3,
      title: 'Mastering TypeScript: Looping with Types',
      link: 'https://samplelink2.com',
      comments: 9,
    },
    {
      id: 4,
      title: 'Regex is not your enemy',
      link: 'https://samplelink2.com',
      comments: 5,
    },
  ];

  return (
    <div className="w-full ">
      <RightBarBox title="Active discussions" content={sampleContent} />
      <RightBarBox title="Active discussions" content={sampleContent} />
      <RightBarBox title="Active discussions" content={sampleContent} />
    </div>
  );
};

export default RightSidebar;
