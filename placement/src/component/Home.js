import Footer from '../Footer';
import Categories from './Categories';
import Hero from './Hero';
import NavBar from './NavBar';
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <div className='box center'>
      <Helmet>
        <title>
          Home
        </title>
      </Helmet>
      <NavBar />
      <Hero />
      <Footer />

    </div>
  );
}

export default Home;