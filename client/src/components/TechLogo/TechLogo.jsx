import React from "react";
import "./TechLogo.css"

const TechLogo = ({name, icon}) => {
  return (
    <div className="col s6 m2 center">
      <p>{name}</p>
      <img className="icon-image" src={icon} alt={name}/>
    </div>
  );
};

export default TechLogo;
