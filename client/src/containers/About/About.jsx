import React from "react";
import "./About.css";
import TechLogo from "../../components/TechLogo/TechLogo";
import technologies from "../../json/technologies.json";

const About = () => {
  return (
    <div id="about-me" className="container">
      <div className="row">
        <div className="col s12 m4">
          <img id="bike" src="./img/me-on-a-bike.jpg" alt="" />
        </div>
        <div className="col s12 m7">
          <h3 className="center">About Me</h3>
          <div id="break"></div>
          <p className="about">
            I am a full stack developer and recent Georgia Tech bootcamp grad
            based in Atlanta, GA. I specialize in React, Node.js, Express,
            MongoDB, MySql, jQuery, Pandas, and Jupyter Notebooks. I went to
            school at the University of Georgia and have a bachelors degree in
            Chemistry. If all my code is working you can find me playing guitar
            or any instrument I can get my hands on!
          </p>
        </div>
      </div>
      <h4>Technical Skills</h4>
      <div id="break"></div>
      <div className="row">
        {technologies.map((tech) => (
          <TechLogo key={tech.id} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default About;
