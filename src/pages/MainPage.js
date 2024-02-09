import React from "react";
import Carousel from "../components/Carousel";
import { Container } from "react-bootstrap";

const MainPage = () => {
  return (
    <div>
      <div className="parent">
        <div className="child">
          <div className="sideChild">
            <div className="hover-text-one">
              <figure className="effect-text-four">
                <img src="/img/влы.png" alt="" />
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
                <img src="/img/панель.png" alt="" />
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
            <h2>Electhor</h2>
            <p>Молниеносная отгрузка</p>
          </div>
        </div>
        <div className="child">
          <div className="sideChild">
            <div className="hover-text-one">
              <figure className="effect-text-four">
                <img src="/img/пч.png" alt="" />
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
                <img src="/img/мотор.png" alt="" />
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
          процессов. Мы сотрудничаем с ведущими производителями промышленной
          электроники, чтобы предоставить нашим клиентам только надежные и
          инновационные решения. Наша команда профессионалов всегда готова
          оказать консультации и поддержку нашим клиентам, помогая им выбирать
          наиболее подходящие решения для их конкретных требований. Мы стремимся
          к долгосрочным партнерским отношениям с нашими клиентами и гарантируем
          высокое качество сервиса. Мы гордимся нашим опытом и экспертизой в
          промышленной электронике, и всегда рады помочь нашим клиентам в их
          бизнесе и достижении успеха. Выбирайте нас в качестве вашего надежного
          партнера для приобретения промышленной электроники высокого качества.
        </p>
        <a href="#" className="btn">
          Узнать больше
        </a>
      </section>
      <section className="features">
        <div className="featureCard">
          <img src="/icons/storage-svgrepo-com.svg" alt="" />
          <h3 className="featureName">Собственный склад</h3>
          <p className="featureDesc">
            Большой ассортимент в наличии и под заказ
          </p>
        </div>
        <div className="featureCard">
          <img src="/icons/support-svgrepo-com.svg" alt="" />
          <h3 className="featureName">Помощь в подборе</h3>
          <p className="featureDesc">Подберем аналог за вас</p>
        </div>
        <div className="featureCard">
          <img src="/icons/handshake-svgrepo-com.svg" alt="" />
          <h3 className="featureName">Прозрачность сделки</h3>
          <p className="featureDesc">Предоставляем все документы</p>
        </div>
        <div className="featureCard">
          <img src="/icons/delivery-car-svgrepo-com.svg" alt="" />
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
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="img/Mitsubishi_Electric.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img src="img/Siemens.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="/img/weintek.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img
                src="img/autonics-seeklogo.com.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="img/Mitsubishi_Electric.png"
                height="100"
                width="250"
                alt=""
              />
            </div>
            <div className="slide">
              <img src="img/Siemens.png" height="100" width="250" alt="" />
            </div>
            <div className="slide">
              <img src="/img/weintek.png" height="100" width="250" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contactLeft">
          <div className="contactLeftInfo">
            <h2>Контакты</h2>
            <p>
              <img src="/icons/pin-svgrepo-com.svg" alt="" />
              Адрес: г. Москва, ул. Cеребрякова, 14, стр. 15
            </p>
            <p>
              <img src="/icons/phone-outgoing-svgrepo-com.svg" alt="" />
              Телефон: +79673506321
            </p>
            <p>
              <img src="/icons/mail-alt-3-svgrepo-com.svg" alt="" />
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
