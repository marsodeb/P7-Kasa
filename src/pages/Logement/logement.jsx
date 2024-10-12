import Carousel from '../../components/Carousel/carousel';
import '../../sass/base.scss';
import './logement.scss';
import useFetch from '../../utils/useFetch';
import { useParams } from "react-router-dom";
import Collapse from '../../components/Collapse/collapse';
import Rating from '../../components/Rating/rating';
import Keyword from '../../components/Keyword/keyword';
import React from 'react';
import Loading from '../../components/Loading/loading';

function Logement() {

    document.title = 'Kasa - Logement'

    const { data, loading, error } = useFetch("http://localhost:3000/annonces.json");
    const { id } = useParams();

    if (loading) {
        return (
            <Loading />
        )
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
            <div className='logement-content'>
                <div className='title-keyword'>
                    <div className='title'>
                        <h1 className='logement-title'>{response.title}</h1>
                        <p className='location'>{response.location}</p>
                    </div>
                    <div className='keyword'>
                        {response.tags.map((item, index) => (
                            <Keyword
                                key={index}
                                word={response.tags[index]}
                            />
                        ))}
                    </div>
                </div>
                <div className='host-rating'>
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
                    <Rating
                        star={response.rating}
                    />
                </div>
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