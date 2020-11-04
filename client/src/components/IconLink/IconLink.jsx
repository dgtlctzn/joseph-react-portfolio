import React from "react";
import "./IconLink.css";

const IconLink = ({ link, image, alt }) => {
  return (
    <div className="col s6 m3">
      <h5 className="logo-name">{alt}</h5>
      <a href={link} target="_blank" rel="noreferrer">
        <img className="icon-logo" src={image} alt={alt} />
      </a>
    </div>
  );
};

export default IconLink;
