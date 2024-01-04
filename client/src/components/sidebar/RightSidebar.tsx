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
    <div className="my-2 rounded-sm bg-white py-2">
      <p className="py-2 pl-4 font-semibold">{title}</p>
      <Separator />
      <div className="">
        <div className="content-section">
          {content.map((item, index) => (
            <>
              <div key={index} className="p-2 ">
                <a href={item.link}>{item.title}</a>
                <p>Comments: {item.comments}</p>
              </div>
              <Separator />
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
