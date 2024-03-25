import { useState, useEffect, ReactNode } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlideInterval, autoSlide]);

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="cursor-pointer rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="cursor-pointer rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-20">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                h-[2px] w-10 cursor-pointer bg-white transition-all
                ${curr === i ? '' : 'bg-opacity-10'}
              `}
              onClick={() => setCurr(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
