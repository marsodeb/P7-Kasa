import './collapse.scss'
import arrow from '../../assets/collapse_arrow.svg'
import React, { useState } from 'react';

function Collapse({ title, content }) {

    const [isActive, setIsActive] = useState(false);


    const handleToggle = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='collapse'>
            <div className='collapse-button' onClick={handleToggle}>
                <h1 className='collapse-title'>{title}</h1>
                <img src={arrow} className={`collapse-arrow ${isActive ? 'rotate' : ''}`} alt='Flèche'></img>
            </div>
            <div className={`collapse-content ${isActive ? 'active' : ''}`}>
                <p className='collapse-txt'>{content}</p>
            </div>
        </div>
    )
}

export default Collapse