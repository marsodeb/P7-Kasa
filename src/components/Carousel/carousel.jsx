import React, { useState } from 'react';
import './carousel.scss';
import arrow_left from '../../assets/arrow_left.svg';
import arrow_right from '../../assets/arrow_right.svg';

function Carousel({ img }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + img.length) % img.length);
    };

    if (!img || img.length === 0) {
        return <p>Aucune image disponible.</p>;
    }

    return (
        <div className='carousel'>
            <img className='carousel-arrow-left' src={arrow_left} alt='Précédent' onClick={prevImage}></img>
            <img className='carousel-arrow-right' src={arrow_right} alt='Suivante' onClick={nextImage}></img>
            <img className='carousel-img' src={img[currentIndex]} alt={`${currentIndex + 1}`} />
            <span className='carousel-counter'>{currentIndex + 1} / {img.length}</span>
        </div>
    );
}

export default Carousel;
