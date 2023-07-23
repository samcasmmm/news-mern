import './hero.css';
import { HeroData } from '../../data/Data';
import { showFewWords } from './../../utils/Utilities';

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
          prev
        </div>
        <div className='content' id='scroll-content'>
          {Array.from({ length: 10 }).map((item, index) => (
            <div key={index} className='box'></div>
          ))}
        </div>
        <div className='next' onClick={() => nextButton()}>
          next
        </div>
      </div>
    </div>
  );
};

export default Hero;
