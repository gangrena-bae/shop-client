import React from "react";
import Carousel from "../components/Carousel";
import { Container } from "react-bootstrap";
import Logo from "../components/icons/logoPNG.png";
import Supp from "../components/icons/support-svgrepo-com.svg";
import Storage from "../components/icons/storage-svgrepo-com.svg";
import Hand from "../components/icons/handshake-svgrepo-com.svg";
import Deliver from "../components/icons/delivery-car-svgrepo-com.svg";
import Val from "../components/icons/vly.png";
import Motor from "../components/icons/motor.png";
import Panel from "../components/icons/panel.png";
import Pch from "../components/icons/pch.png";

const MainPage = () => {
  return (
    <div>
      <div className="parent">
        <div className="child">
          <div className="sideChild">
            <div className="hover-text-one">
              <figure className="effect-text-four">
                <img src={Val}></img>
                <figcaption>
                  <h3>Винтовые передачи</h3>
                  <p>Только надежное железо</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="sideChild">
            <div className="hover-text-one">
              <figure className="effect-text-four">
                <img src={Panel}></img>
                <figcaption>
                  <h3>Редукторы</h3>
                  <p>Простое решение непростой задачи</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="bigChild">
          <div className="info">
            <img src={Logo} className="logoImg"></img>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
        </div>
        <div className="child">
          <div className="sideChild">
            <div className="hover-text-one">
              <figure className="effect-text-four">
                <img src={Pch}></img>
                <figcaption>
                  <h3>Частотные преобразователи</h3>
                  <p>Высокое качество и обширные возможности</p>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="sideChild">
            <div className="hover-text-one">
              <figure className="effect-text-four">
                <img src={Motor}></img>
                <figcaption>
                  <h3>Сервоприводы</h3>
                  <p>Для тех, кто ценит время и деньги</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <section id="hero">
        <h2>О нас</h2>
        <p>
          Мы - профессиональный поставщик промышленной электроники. Наша
          компания специализируется на продаже широкого ассортимента
          оборудования, компонентов и систем промышленной электроники. Мы
          предлагаем высококачественные продукты, которые предназначены для
          использования в промышленных отраслях, таких как производство,
          энергетика, автоматизация, обработка данных и многое другое. Наш
          ассортимент включает в себя электронные приборы, контроллеры, панели
          управления, сенсоры, преобразователи сигналов, промышленные компьютеры
          и другие продукты, необходимые для эффективной работы промышленных
          процессов.
        </p>
        <a href="#" className="btn">
          Узнать больше
        </a>
      </section>
      <section className="features">
        <div className="featureCard">
          <img src={Storage} />
          <h3 className="featureName">Собственный склад</h3>
          <p className="featureDesc">
            Большой ассортимент в наличии и под заказ
          </p>
        </div>
        <div className="featureCard">
          <img src={Supp} />
          <h3 className="featureName">Помощь в подборе</h3>
          <p className="featureDesc">Подберем аналог за вас</p>
        </div>
        <div className="featureCard">
          <img src={Hand} />
          <h3 className="featureName">Прозрачность сделки</h3>
          <p className="featureDesc">Предоставляем все документы</p>
        </div>
        <div className="featureCard">
          <img src={Deliver} />
          <h3 className="featureName">Быстрая доставка</h3>
          <p className="featureDesc">Налаженные каналы поставки</p>
        </div>
      </section>

      <section className="carousel">
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img
                src="img/autonics-seeklogo.com.png"
                height="100"
                width="250"
              />
            </div>
            <div className="slide">
              <img src="img/Mitsubishi_Electric.png" height="100" width="250" />
            </div>
            <div className="slide">
              <img src="img/Siemens.png" height="100" width="250" />
            </div>
            <div className="slide">
              <img src="/img/weintek.png" height="100" width="250" />
            </div>
            <div className="slide">
              <img
                src="img/autonics-seeklogo.com.png"
                height="100"
                width="250"
              />
            </div>
            <div className="slide">
              <img src="img/Mitsubishi_Electric.png" height="100" width="250" />
            </div>
            <div className="slide">
              <img src="img/Siemens.png" height="100" width="250" />
            </div>
            <div className="slide">
              <img src="/img/weintek.png" height="100" width="250" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
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
      </section>

      <footer>
        <p>© 2022 Electhor. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default MainPage;
