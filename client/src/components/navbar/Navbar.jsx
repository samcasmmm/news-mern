import { useRef, useEffect } from 'react';
import './navbar.css';

import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const mobileNavbar = useRef(null);

  const toggleNavbar = () => {
    let curr = mobileNavbar.current;
    let currLeft = parseFloat(curr.style.left);

    if (currLeft === -100) {
      curr.style.left = '0';
    } else {
      curr.style.left = '-100%';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let curr = mobileNavbar.current;
      curr.style.left = '-100%';
    });
  }, []);

  return (
    <nav>
      <div className='container'>
        <div className='hamburger' onClick={() => toggleNavbar()}>
          <GiHamburgerMenu />
        </div>
        <p>Digital Papr</p>
        <ul>
          <li>
            <div className='links'>
              <p>Home</p>
              <BiChevronDown />
            </div>
            <div className='dropdown-content'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </li>
          <li>
            <div className='links'>
              <p>Pages</p>
              <BiChevronDown />
            </div>
            <div className='dropdown-content'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </li>
          <li>
            <div className='links'>
              <p>About</p>
              <BiChevronDown />
            </div>
            <div className='dropdown-content'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </li>
          <li>
            <div className='links'>
              <p>News</p>
              <BiChevronDown />
            </div>
            <div className='dropdown-content'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </li>
          <li>
            <div className='links'>
              <p>Category</p>
              <BiChevronDown />
            </div>
            <div className='dropdown-content'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </li>
          <li>
            <div className='links'>
              <p>Contact</p>
              <BiChevronDown />
            </div>
            <div className='dropdown-content'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </li>
          <li>
            <div className='search'>
              <input type='text' placeholder='Search...' />
              <AiOutlineSearch />
            </div>
          </li>
        </ul>
        <div className='mobile-nav' ref={mobileNavbar}>
          <div className='content'>
            <div className='links'>
              <div className='search'>
                <input type='text' placeholder='Search...' />
                <AiOutlineSearch />
              </div>
            </div>

            <div className='links'>
              <div className='title'>
                <p>Home</p>
                <BiChevronDown />
              </div>
              <div className='dropdown-content'>
                <a href='#'>Link 1</a>
                <a href='#'>Link 2</a>
                <a href='#'>Link 3</a>
              </div>
            </div>
            <div className='links'>
              <div className='title'>
                <p>Pages</p>
                <BiChevronDown />
              </div>
              <div className='dropdown-content'>
                <a href='#'>Link 13</a>
                <a href='#'>Link 2</a>
                <a href='#'>Link 3</a>
              </div>
            </div>
            <div className='links'>
              <div className='title'>
                <p>About</p>
                <BiChevronDown />
              </div>
              <div className='dropdown-content'>
                <a href='#'>Link 14</a>
                <a href='#'>Link 2</a>
                <a href='#'>Link 3</a>
              </div>
            </div>
            <div className='links'>
              <div className='title'>
                <p>Category</p>
              </div>
            </div>
            <div className='links'>
              <div className='title'>
                <p>Contact</p>
              </div>
            </div>
          </div>
          <div className='title xmark' onClick={() => toggleNavbar()}>
            <AiOutlineClose />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
