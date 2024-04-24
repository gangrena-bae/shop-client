import React from "react";
import Carousel from "../components/Carousel";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Logo from "../components/icons/logoPNG.png";
import Supp from "../components/icons/support-svgrepo-com.svg";
import Storage from "../components/icons/storage-svgrepo-com.svg";
import Hand from "../components/icons/handshake-svgrepo-com.svg";
import Deliver from "../components/icons/delivery-car-svgrepo-com.svg";
import Val from "../components/icons/vly.png";
import Motor from "../components/icons/motor.png";
import Panel from "../components/icons/panel.png";
import Pch from "../components/icons/pch.png";
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  SHOP_ROUTE,
  SPECIAL_ROUTE,
} from "../utils/consts";
import { NavLink } from "react-router-dom";
import ImageHoverText from "../components/ImageHoverText";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import BrandCarousel from "../components/BrandCarousel";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <div>
      <div className="parent">
        <div className="child">
          <div className="sideChild">
            <NavLink to={SHOP_ROUTE}>
              <ImageHoverText
                imageSrc={Val}
                title="Винтовые передачи"
                text="Только надежное железо"
              />
              {/* <div className="hover-text-one">
                <figure className="effect-text-four">
                  <Image src={Val}></Image>
                  <figcaption>
                    <h3>Винтовые передачи</h3>
                    <p>Только надежное железо</p>
                  </figcaption>
                </figure>
              </div> */}
            </NavLink>
          </div>

          <div className="sideChild">
            <NavLink to={SHOP_ROUTE}>
              {/* <div className="hover-text-one">
                <figure className="effect-text-four">
                  <Image src={Panel}></Image>
                  <figcaption>
                    <h3>Редукторы</h3>
                    <p>Простое решение непростой задачи</p>
                  </figcaption>
                </figure>
              </div> */}

              <ImageHoverText
                imageSrc={Panel}
                title="Редукторы"
                text="Простое решение непростой задачи"
              />
            </NavLink>
          </div>
        </div>
        <div className="bigChild">
          <div className="info">
            <Image src={Logo} className="logoImg"></Image>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
            <Row>
              <Col>
                <NavLink to={SHOP_ROUTE}>
                  <Button variant="outline-primary">Магазин</Button>
                </NavLink>
              </Col>
              <Col>
                <NavLink to={SPECIAL_ROUTE}>
                  <Button variant="outline-primary" className="text-nowrap">
                    Связаться с нами
                  </Button>
                </NavLink>
              </Col>
            </Row>
          </div>
        </div>
        <div className="child">
          <div className="sideChild">
            <NavLink to={SHOP_ROUTE}>
              {/* <div className="hover-text-one">
                <figure className="effect-text-four">
                  <img src={Pch}></img>
                  <figcaption>
                    <h3>Преобразователи</h3>
                    <p>Высокое качество и обширные возможности</p>
                  </figcaption>
                </figure>
              </div> */}
              <ImageHoverText
                imageSrc={Pch}
                title="Преобразователи"
                text="Высокое качество и обширные возможности"
              />
            </NavLink>
          </div>

          <div className="sideChild">
            <NavLink to={SHOP_ROUTE}>
              {/* <div className="hover-text-one">
                <figure className="effect-text-four">
                  <Image src={Motor}></Image>
                  <figcaption>
                    <h3>Сервоприводы</h3>
                    <p>Для тех, кто ценит время и деньги</p>
                  </figcaption>
                </figure>
              </div> */}
              <ImageHoverText
                imageSrc={Motor}
                title="Сервоприводы"
                text="Для тех, кто ценит время и деньги"
              />
            </NavLink>
          </div>
        </div>
      </div>
      <HeroSection />
      <Features />

      <BrandCarousel />

      {/* <section id="contact">
        <div className="contactLeft">
          <div className="contactLeftInfo">
            <h2>Контакты</h2>
            <p>
              <img src="/icons/pin-svgrepo-com.svg" />
              Адрес: г. Москва, ул. Cеребрякова, 14, стр. 15
            </p>
            <p>
              <img src="/icons/phone-outgoing-svgrepo-com.svg" />
              Телефон: +79673506321
            </p>
            <p>
              <img src="/icons/mail-alt-3-svgrepo-com.svg" />
              Email: client@rolltex.ru
            </p>
          </div>
        </div>
        <div className="contactRight">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A88f67665cde03ae8768a466591c1c92e0fc30814db75f52f85bc9b24118e9b35&amp;source=constructor"
            width="500"
            height="500"
            frameborder="0"
          ></iframe>
        </div>
      </section> */}
      <ContactSection />
    </div>
  );
};

export default MainPage;
