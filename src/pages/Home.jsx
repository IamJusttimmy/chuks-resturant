import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import Specials from '../components/Specials';
import WhatsNew from '../components/WhatsNew';

const Home = () => {
  return (
    <main>
      <Hero />
      <SearchBar />
      <Categories />
      <Specials />
      <WhatsNew />
    </main>
  );
};

export default Home;