import Carousel from '../../components/Carousel/carousel';
import '../../sass/base.scss';
import './logement.scss';
import useFetch from '../../utils/useFetch';
import { useParams } from "react-router-dom";

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
        </section>
    );
}

export default Logement;