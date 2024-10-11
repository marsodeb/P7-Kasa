import Carousel from '../../components/Carousel/carousel';
import '../../sass/base.scss';
import './logement.scss';
import useFetch from '../../utils/useFetch';
import { useParams } from "react-router-dom";
import Collapse from '../../components/Collapse/collapse';

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