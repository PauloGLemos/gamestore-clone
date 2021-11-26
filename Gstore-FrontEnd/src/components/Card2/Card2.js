import './Card2.css';
import { FaRegHeart } from 'react-icons/fa';

export default function Card(props) {
  return (
    <div className="center">
    <div className='card'>
      <a className='card-item' href={props.linkItem}>
        <div className='card-image2'>
          <img src="https://cdn2.unrealengine.com/egs-starwarsbattlefrontiicelebrationedition-dice-g1a-01-1920x1080-87971829e831.jpg" alt={props.title}></img>
        </div>
      </a>
    </div>
    </div>
  )
}