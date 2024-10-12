import Carousel from '../../components/Carousel/carousel';
import '../../sass/base.scss';
import './logement.scss';
import useFetch from '../../utils/useFetch';
import { useParams } from "react-router-dom";
import Collapse from '../../components/Collapse/collapse';
import Rating from '../../components/Rating/rating';
import Keyword from '../../components/Keyword/keyword';
import React from 'react';

function Logement() {

    const { data, loading, error } = useFetch("http://localhost:3000/annonces.json");
    const { id } = useParams();

    if (loading) {
        return <p>Chargement en cours...</p>;
    }

    if (error) {
        return <p>Une erreur est survenue : {error.message}</p>;
    }

    const response = data.find(item => item.id === id);

    if (!response) {
        return <p>Aucune annonce trouvée pour cet ID.</p>;
    }

    return (
        <section className='logement'>
            <Carousel
                img={response.pictures} />
            <div className='title-host'>
                <div className='title'>
                    <h1 className='logement-title'>{response.title}</h1>
                    <p className='location'>{response.location}</p>
                </div>
                <div className='host'>
                    <span className='host-name'>
                        {response.host.name.split(' ').map((name, index) => (
                            <React.Fragment key={index}>
                                {name}
                                {index === 0 && <br />}
                            </React.Fragment>
                        ))}
                    </span>
                    <img className='host-img' src={response.host.picture} alt={response.host.name}></img>
                </div>
            </div>
            <div className='keyword-rating'>
                <div className='keyword'>
                    {response.tags.map((item, index) => (
                        <Keyword
                            key={index}
                            word={response.tags[index]}
                        />
                    ))}
                </div>
                <Rating
                    star={response.rating}
                />
            </div>
            <div className='logement-collapse'>
                <Collapse
                    title={"Description"}
                    content={response.description}
                />
                <Collapse
                    title={"Équipements"}
                    content={response.equipments}
                />
            </div>
        </section>
    );
}

export default Logement;