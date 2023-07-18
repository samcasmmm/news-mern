import './header.css';

import { ImFacebook, ImTwitter } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='head-dates'>Tuesday, July 18, 2023</div>
        <div className='links-icons'>
          <div className='links'>
            <p>Career</p>
            <p>Contact Us</p>
            <p>Login/Register</p>
          </div>
          <div className='icons'>
            <ImFacebook className='icon' />
            <ImTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
