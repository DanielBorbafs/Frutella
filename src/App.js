import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'


import Hero from './Components/Hero';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='main'>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App;
