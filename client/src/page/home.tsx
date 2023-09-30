import RecentNews from '../components/RecentNews';

const Home = () => {
  return (
    <>
      <div className="container mt-4 flex h-20 w-full flex-row px-4">
        <div className="hidden h-20 w-full flex-1 bg-red-500 md:block"></div>
        <div className="h-20 w-full flex-[3] bg-teal-500">
          <RecentNews />
        </div>
        <div className="hidden h-20 w-full flex-1  bg-red-500 md:block"></div>
      </div>
    </>
  );
};

export default Home;
