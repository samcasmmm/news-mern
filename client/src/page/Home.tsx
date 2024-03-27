import HeroSection from '@/components/HeroSection';

const Home = () => {
  return (
    <div className="flex h-screen w-full flex-col items-start justify-start">
      <HeroSection />
      <div className="flex w-full flex-row items-center justify-center gap-2 p-2">
        {Array.from({ length: 4 }).map((item, index) => (
          <div className="flex-1 bg-gray-100 p-2">a</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
