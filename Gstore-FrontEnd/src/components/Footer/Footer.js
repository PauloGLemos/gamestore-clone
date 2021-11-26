import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaTwitterSquare />
        <FaYoutubeSquare />
      </div>
      <span>© 2021 Paluo Gabriel</span>
      <span>Not associated with Steam | College Work | Gaming Website</span>
    </div>
  )
}