import React from 'react';
import { useInView } from 'react-intersection-observer';
import './ContactSection.css';
import PinIcon from "./icons/pin.svg";
import PhoneIcon from "./icons/phone-outgoing-svgrepo-com.svg";
import MailIcon from "./icons/mail-alt-3-svgrepo-com.svg";

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" ref={ref} className={inView ? 'fade-in' : ''}>
      <div className="contactLeft">
        <div className="contactLeftInfo">
          <h2>Контакты</h2>
          <p>
            <img src={PinIcon} alt="Адрес" />
            Адрес: г. Москва, ул. Cеребрякова, 14, стр. 15
          </p>
          <p>
            <img src={PhoneIcon} alt="Телефон" />
            Телефон: +79673506321
          </p>
          <p>
            <img src={MailIcon} alt="Email" />
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
          title="Yandex Map"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;