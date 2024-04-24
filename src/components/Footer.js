import React from 'react';
import './Footer.css'; // Убедитесь, что указан правильный путь к файлу стилей
import { ReactComponent as PhoneIcon } from "../components/icons/phone-outgoing-svgrepo-com.svg";
import { ReactComponent as Pin } from "../components/icons/pin.svg";
import { ReactComponent as Mail } from "../components/icons/mail.svg";
import { ReactComponent as Telegram } from "../components/icons/telegram.svg";
import { ReactComponent as Whatsapp } from "../components/icons/whatsapp.svg";
import { ReactComponent as Viber } from "../components/icons/viber.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <PhoneIcon className="footer-icon" />
        <span>+7 (999) 999-99-99</span>
      </div>
      <div className="footer-contact">
        <Pin className="footer-icon" />
        <span>Москва, Россия</span>
      </div>
      <div className="footer-contact">
        <Mail className="footer-icon" />
        <span>info@example.com</span>
      </div>
      <div className="footer-socials">
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"><Telegram className="footer-icon" /></a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><Whatsapp className="footer-icon" /></a>
        <a href="https://viber.com" target="_blank" rel="noopener noreferrer"><Viber className="footer-icon" /></a>
      </div>
    </footer>
  );
};

export default Footer;