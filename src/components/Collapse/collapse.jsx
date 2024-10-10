import './collapse.scss'
import arrow from '../../assets/collapse_arrow.svg'

function Collapse({ title, content }) {

    return (
        <div className='collapse'>
            <div className='collapse-button'>
                <h1 className='collapse-title'>{title}</h1>
                <img src={arrow} className='collapse-arrow' alt='Flèche'></img>
            </div>
            <div className='collapse-content'>
                <p className='collapse-txt'>{content}</p>
            </div>
        </div>
    )
}

export default Collapse