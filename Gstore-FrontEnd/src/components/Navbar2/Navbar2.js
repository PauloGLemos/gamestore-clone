import './Navbar2.css';
import { FaHeart, FaRebel, FaRegQuestionCircle, FaRegUser } from 'react-icons/fa';
import { FaSearchPlus } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='navbar2'>
      <div className='navbar__links2'>
        <ul className='navbar__links__list'>
          <li>
            <a className='items' href='https://store.steampowered.com/?l=portuguese'>
              <span className='text'>Your Store</span>
            </a>
          </li>
          <li>
            <a className='items' href='#!'>
              <span className='text'>New Noteworthy</span>
            </a>
          </li>
          <li>
            <a className='items' href='#!'>
              <span className='text'>Categories</span>
            </a>
          </li>
          <li>
            <a className='items' href='#!'>
              <span className='text'>Point Shop</span>
            </a>
          </li>
          <li>
            <a className='items' href='#!'>
              <span className='text'>News</span>
            </a>
          </li>
          <li>
            <a className='items' href='#!'>
              <span className='text'>Labs</span>
            </a>
          </li>
        </ul>
          <div className='search'>
            <form className='search-input'>
              <input className='type' type='text' placeholder='search'></input>
              <FaRebel />
            </form>
          </div>
      </div>
    </div>
  )
}