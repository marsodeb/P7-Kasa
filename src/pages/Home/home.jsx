import '../../sass/base.scss'
import homebg from '../../assets/home_bg.jpg'
import Banner from '../../components/Banner/banner';

function Home() {
  return (
    <section className='home'>
      <Banner
        cover={homebg}
        title={"Chez vous, partout et ailleurs"}
      />
    </section >
  )
}

export default Home;
