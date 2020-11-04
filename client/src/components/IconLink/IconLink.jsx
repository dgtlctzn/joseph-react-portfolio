import React from "react";
import "./IconLink.css"

const IconLink = ({link, image, alt}) => {
  return (
    <div className="col s12 m3">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="icon-logo" src={image} alt={alt} />
      </a>
    </div>
  );
};

export default IconLink;
