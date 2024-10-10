import './card.scss'
import { Link } from 'react-router-dom'

function Card({ cover, title, link }) {

    return (
        <Link to={link}>
            <div className='logement-card'>
                <img className='logement-card-cover' src={cover} alt={title}></img>
                <h2 className='logement-card-title'>{title}</h2>
            </div>
        </Link>
    )
}

export default Card