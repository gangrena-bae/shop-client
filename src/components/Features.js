import React from "react";
import { useInView } from "react-intersection-observer";
import "./Features.css"; // Убедитесь, что путь к файлу CSS правильный
import Supp from "../components/icons/support-svgrepo-com.svg";
import Storage from "../components/icons/storage-svgrepo-com.svg";
import Hand from "../components/icons/handshake-svgrepo-com.svg";
import Deliver from "../components/icons/delivery-car-svgrepo-com.svg";

const FeatureCard = ({ src, title, description }) => {
  return (
    <div className="featureCard">
      <img src={src} alt={title} />
      <h3 className="featureName">{title}</h3>
      <p className="featureDesc">{description}</p>
    </div>
  );
};

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className={`features ${inView ? "fade-in" : ""}`} ref={ref}>
      {/* Пример использования компонента FeatureCard */}
      <FeatureCard
        src={Storage}
        title="Собственный склад"
        description="Большой ассортимент в наличии и под заказ"
      />
      <FeatureCard
        src={Supp}
        title="Помощь в подборе"
        description="Подберем аналог за вас"
      />
      <FeatureCard
        src={Hand}
        title="Прозрачность сделки"
        description="Предоставляем все документы"
      />
      <FeatureCard
        src={Deliver}
        title="Быстрая доставка"
        description="Налаженные каналы поставки"
      />
    </section>
  );
};

export default Features;
