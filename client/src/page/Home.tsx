import HeroSection from '@/components/HeroSection';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppState';

const Home = () => {
  const { user } = useAppSelector((state) => state.Auth);
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-screen w-full items-start justify-center">
      <HeroSection />
    </div>
  );
};

export default Home;
