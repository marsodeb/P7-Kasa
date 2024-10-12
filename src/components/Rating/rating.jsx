import './rating.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ star }) {
    const totalStars = 5;
    return (
        <div className='rating'>
            {Array.from({ length: star }).map((item, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className='rated' />
            ))}
            {Array.from({ length: totalStars - star }).map((item, index) => (
                <FontAwesomeIcon key={index} icon={faStar} className='unrated' />
            ))}
        </div>
    );
}

export default Rating;