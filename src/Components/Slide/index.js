// src/components/PartnerSlider.js
import React from 'react';
import Slider from 'react-slick';
import './slide.css'; // Adicione o CSS personalizado se necessário

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
      <Slider {...settings}>
        <div className="slide">
          <img src="marca1.png" alt="Marca 1" />
        </div>
        <div className="slide">
          <img src="marca2.png" alt="Marca 2" />
        </div>
        <div className="slide">
          <img src="marca3.png" alt="Marca 3" />
        </div>
        <div className="slide">
          <img src="marca3.png" alt="Marca 3" />
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>
    </div>
  );
};

export default PartnerSlider;
