import './Slider.css';
import { FaAngleRight } from 'react-icons/fa';

export default function Slider(props) {
  return (
    <div className="center">
      <img className='image' src="https://cdn1.epicgames.com/e509c16d53714b13ba8e393966507255/offer/jedi-fallen-orderWide-1920x1080-28eae371dbae080e2fc0df646fa42917.jpg" alt={props.alt} />
        <div className='classification'>
          <div className='square'>
            {props.classificationNumber}
          </div>
          <span className='class-text'>{props.classificationText}</span>
        </div>
      </div>
  )
}