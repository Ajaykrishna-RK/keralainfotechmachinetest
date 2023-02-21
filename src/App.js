import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/banner/Banner';
import Bannerlink from './components/bannerLinks/Bannerlink';
import Whatwedo from './components/whatWedo/Whatwedo';
import Whychooseus from './components/whychooseus/Whychooseus';
import Photogalery from './components/photogallery/Photogalery';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <Header/>

      <Banner/>

      <Bannerlink/>

      <Whatwedo/>

      <Whychooseus/>

      <Photogalery/>

     <Footer/>
    </div>
  );
}

export default App;
