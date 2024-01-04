import { useState } from 'react';
import { Button, RightSidebar, Sidebar } from '../components';

type TSelectSort = 'relevant' | 'latest' | 'top';

const Home = () => {
  const [selectSort, setSelectSort] = useState<TSelectSort>('relevant');

  const handleSelectionChange = (text: TSelectSort) => {
    setSelectSort(text);
  };

  const SortTabs = () => {
    return (
      <div className="flex flex-row gap-2 p-1">
        <Button
          variant={'link'}
          className={`text-gray-600 hover:bg-white hover:text-blue-600 hover:no-underline dark:bg-dark-box2 ${
            selectSort === 'relevant' && 'font-bold text-black dark:bg-white'
          }`}
          onClick={() => handleSelectionChange('relevant')}
        >
          Relevant
        </Button>
        <Button
          variant={'link'}
          className={`text-gray-600 hover:bg-white hover:text-blue-600 hover:no-underline dark:bg-dark-box2 ${
            selectSort === 'latest' && 'font-bold text-black dark:bg-white'
          }`}
          onClick={() => handleSelectionChange('latest')}
        >
          Latest
        </Button>
        <Button
          variant={'link'}
          className={`text-gray-600 hover:bg-white hover:text-blue-600 hover:no-underline dark:bg-dark-box2 ${
            selectSort === 'top' && 'font-bold text-black dark:bg-white'
          }`}
          onClick={() => handleSelectionChange('top')}
        >
          Top
        </Button>
      </div>
    );
  };

  const renderContent = () => {
    if (selectSort === 'relevant') {
      return <p>{selectSort}</p>;
    }
    if (selectSort === 'latest') {
      return <p>{selectSort}</p>;
    }
    if (selectSort === 'top') {
      return <p>{selectSort}</p>;
    }
  };

  return (
    <>
      <div className="container flex flex-row gap-2 p-2">
        <div className="hidden h-[30vh] flex-1 md:flex">
          <Sidebar />
        </div>
        <div className="flex-[3] space-y-2">
          <SortTabs />
          <div className="h-[30vh] bg-green-600">{renderContent()}</div>
        </div>
        <div className="hidden h-[30vh] flex-1 lg:flex">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Home;
