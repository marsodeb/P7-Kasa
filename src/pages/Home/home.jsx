import '../../sass/base.scss';
import './home.scss';
import homebg from '../../assets/home_bg.jpg';
import Banner from '../../components/Banner/banner';
import Card from '../../components/Cards/card';
import useFetch from '../../utils/useFetch';
import Loading from '../../components/Loading/loading';

function Home() {

  document.title = 'Kasa - Home'

  const { data, loading, error } = useFetch("http://localhost:3000/annonces.json");

  if (loading) {
    return (
      <Loading />
    )
  }

  if (error) {
    return <p>Une erreur est survenue : {error.message}</p>;
  }

  return (
    <section className="home">
      <Banner
        cover={homebg}
        title={"Chez vous, partout et ailleurs"}
      />
      <div className="logement-card-container">
        {Array.isArray(data) && data.map((response) => (
          <Card
            link={`/logement/${response.id}`}
            key={response.id}
            cover={response.cover}
            title={response.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Home;
