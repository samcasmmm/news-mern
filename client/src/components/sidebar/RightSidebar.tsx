import { Separator } from '../index';

// type Props = {};
interface IContent {
  title: string;
  link: string;
  comments: number;
}
interface IRightBarBox {
  title: string;
  content: IContent[];
}

const RightBarBox = ({ title }: IRightBarBox) => {
  return (
    <div className="bg-white p-2">
      <div className="">
        <p>{title}</p>
        <Separator />
        {}
      </div>
    </div>
  );
};

const RightSidebar = () => {
  return (
    <div className="w-full ">
      <RightBarBox title="Active discussions" />
    </div>
  );
};

export default RightSidebar;
