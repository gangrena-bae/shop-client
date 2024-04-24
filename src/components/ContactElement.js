import React from "react";
import "./ContactElementStyles.css";

const ContactElement = ({ icon, title, description }) => {
  return (
    <div className="contact-element">
      <div className="icon">{icon}</div>
      <div className="content-contact">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContactElement;
