import './Navbar.css';
import logo from './logo_steam.svg';
import { FaHeart, FaRegQuestionCircle, FaRegUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img className='navbar__image' src={logo} alt='Nintendo Shop'></img>
      </div>
      <div className='navbar__links'>
        <ul className='navbar__links__list'>
          <li>
            <a className='items' href='https://store.steampowered.com/?l=portuguese'>
              <span className='text'>STORE</span>
            </a>
          </li>
          <li>
            <a className='items' href='#!'>
              <span className='text'>COMMUNITY</span>
            </a>
          </li>
          <li>
            <a className='items' href='#!'>
              <span className='text'>ABOUT</span>
            </a>
          </li>
          <li>
            <a className='items' href='#!'>
              <span className='text'>SUPPORT</span>
            </a>
          </li>
          <li>
            <a className='item' href='#!'>
              <span className='text1'>install steam</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}