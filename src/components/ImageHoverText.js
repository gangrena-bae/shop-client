import React from "react";
import "./ImageHoverText.css";

const ImageHoverText = ({ imageSrc, title, text }) => {
  return (
    <div className="image-hover-container">
      <img src={imageSrc} alt="Hover" />
      <div className="title-bar">
        <span>{title}</span>
      </div>{" "}
      <div className="hover-text">{text}</div>
    </div>
  );
};

export default ImageHoverText;
