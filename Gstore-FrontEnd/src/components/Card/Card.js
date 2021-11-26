import './Card.css';
import { FaRegHeart } from 'react-icons/fa';

export default function Card(props) {
  return (
    <div className="center">
    <div className='card'>
      <a className='card-item' href={props.linkItem}>
        <div className='card-image'>
          <img src="https://cdn1.epicgames.com/e509c16d53714b13ba8e393966507255/offer/jedi-fallen-orderWide-1920x1080-28eae371dbae080e2fc0df646fa42917.jpg" alt={props.title}></img>
        </div>
      </a>
    </div>
    </div>
  )
}