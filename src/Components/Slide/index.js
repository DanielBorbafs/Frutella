// src/components/PartnerSlider.js
import React from 'react';
import Slider from 'react-slick';
import './slide.css'; 
import citrusBrasil from '../../assets/images/citrusBrasil.svg';
import sucosTropicalia from '../../assets/images/sucosTropicalia.svg';
import frutamerica from '../../assets/images/frutamerica.svg';
import frutaviva from '../../assets/images/frutaviva.svg';
import saborDaTerra from '../../assets/images/saborDaTerra.svg';


const PartnerSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Ajuste o número de slides exibidos
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Tempo entre as transições
  };

  return (
    <div className="partner-slider">
        <h2 className="underline">Marcas Parceiras</h2>
      <Slider {...settings} className='Slide-marcas'>
        <div className="slide">
          <img src={citrusBrasil} alt="Marca citrus Brasil" />
        </div>
        <div className="slide">
          <img src={sucosTropicalia} alt="Marca Tropicalia" />
        </div>
        <div className="slide">
          <img src={frutamerica} alt="Marca frutamerica" />
        </div>
        <div className="slide">
          <img src={frutaviva} alt="Marca frutaviva" />
        </div>
        <div className="slide">
          <img src={saborDaTerra} alt="Marca frutaviva" />
        </div>
      </Slider>
    </div>
  );
};

export default PartnerSlider;
