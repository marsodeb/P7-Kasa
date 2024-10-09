import './banner.scss'
import { useLocation } from 'react-router-dom';

function Banner({ cover, title }) {

    const location = useLocation();
    const imgClassName = location.pathname === "/" ? "banner-bg filter-bg" : "banner-bg";

    return (
        <section className="banner">
            <img className={imgClassName} src={cover} alt='Paysage'></img>
            <h1 className="banner-title">{title}</h1>
        </section>
    )
}

export default Banner