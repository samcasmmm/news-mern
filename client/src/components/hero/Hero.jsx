import './hero.css';
import { HeroData, scrollCardData } from '../../data/Data';
import { showFewWords, CurrentDate } from './../../utils/Utilities';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
const Hero = () => {
  const prevButton = () => {
    const scroll = document.querySelector('#scroll-content');
    scroll.scrollLeft = scroll.scrollLeft - 340;
  };
  const nextButton = () => {
    const scroll = document.querySelector('#scroll-content');
    scroll.scrollLeft = scroll.scrollLeft + 340;
  };
  return (
    <div className='hero'>
      <div className='container'>
        {HeroData.map((item, index) => (
          <div className={`heroCard${index}`} key={item.id}>
            <div className='overlay'></div>
            <span className='category'>{item.category}</span>
            <img className='cardImg' src={item.image} alt={item.title} />
            <div className='content'>
              <p>{showFewWords(item.title, 100)}</p>
              <div className='info'>
                <p>By {item.author}</p>
                <b>&#x2022; </b>
                <p>{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='scroll-story'>
        <div className='prev' onClick={() => prevButton()}>
          <FiChevronLeft />
        </div>
        <div className='content' id='scroll-content'>
          {scrollCardData.map((item) => (
            <div key={item.id} className='box'>
              <img src={item.image} alt={showFewWords(item.title, 5)} />
              <div className='box-content'>
                <p className='author'>By {item.author}</p>
                <p className='date'>{item.date}</p>
                <p className='title'>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='next' onClick={() => nextButton()}>
          <FiChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Hero;
