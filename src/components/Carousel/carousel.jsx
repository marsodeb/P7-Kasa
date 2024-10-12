import React, { useState, useEffect } from 'react';
import './carousel.scss';
import arrow_left from '../../assets/arrow_left.svg';
import arrow_right from '../../assets/arrow_right.svg';

function Carousel({ img }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextImage = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
            setIsAnimating(false);
        }, 200);
    };

    const prevImage = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + img.length) % img.length);
            setIsAnimating(false);
        }, 200);
    };

    if (!img || img.length === 0) {
        return <p>Aucune image disponible.</p>;
    }

    return (
        <div className='carousel'>
            <img className='carousel-arrow-left' src={arrow_left} alt='Précédent' onClick={prevImage} />
            <img className='carousel-arrow-right' src={arrow_right} alt='Suivante' onClick={nextImage} />
            <img
                className={`carousel-img ${!isAnimating ? 'active' : ''}`}
                src={img[currentIndex]}
                alt={`${currentIndex + 1}`}
            />
            <span className='carousel-counter'>{currentIndex + 1} / {img.length}</span>
        </div>
    );
}

export default Carousel;
