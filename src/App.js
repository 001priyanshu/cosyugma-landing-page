
import './App.css';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import ImageAbout from './components/ImageAbout/ImageAbout';
import AboutUs from './components/AboutUs';
import Vision from './components/Vision';
import Footer from './components/Footer';
import GuidingPriciple from './components/guidingpriciple/GuidingPriciple';
import Values from './components/values/Values';
import Awards from './components/awards/Awards';

function App() {
  return (
    <div className="App">
      <SocialMedia/>
       <Navbar/>
       <ImageAbout/>
       <AboutUs/>
       <Vision/>
       
       <GuidingPriciple/>
       <Values/>
       <Awards/>
    </div>
  );
}

export default App;
