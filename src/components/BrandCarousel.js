import React from "react";
import { Carousel } from "react-bootstrap";
import Autonics from "../components/icons/Autonics.png";
import Siemens from "../components/icons/Siemens.png";
import BlueLogo from "../components/icons/BlueLogo.png";
import Mitsubishi from "../components/icons/Mitsubishi.png";
import "./BrandCarousel.css";

const BrandCarousel = () => {
  return (
    <div className="carousel brand-carousel">
      <Carousel interval={1000} /* Задаем интервал в миллисекундах */>
        <Carousel.Item>
          <img className="d-block w-100" src={Autonics} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Siemens} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={BlueLogo} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Mitsubishi} alt="Fourth slide" />
        </Carousel.Item>
        {/* Добавьте дополнительные слайды по необходимости */}
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
