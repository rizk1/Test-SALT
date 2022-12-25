
import './App.css';
import Navbar from './components/Navbar';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Slider from './components/Slider';
import CoreList from './components/CoreList';
import Specialist from './components/Sepcialist';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {

  return (
    <>
        <Navbar />
        <Hero />
        <Slider />
        <CoreList />
        <Specialist />
        <Footer />
    </>
  )
}

export default App;
