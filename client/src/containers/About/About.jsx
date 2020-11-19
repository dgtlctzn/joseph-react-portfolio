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
          <h3>About Me</h3>
          <div id="break"></div>
          <p className="about">
            Full stack developer and recent Georgia Tech bootcamp grad based in
            Atlanta, GA. Passionate about building web applications that are
            dynamic, responsive, and user-friendly. Experience with front-end
            and back-end, and love building Python scripts on my Raspberry Pi.
          </p>
          <p className="about">
            As a self-taught former recording engineer, I developed the ability to
            quickly pick up new technologies and work with many clients. I
            thrive in environments that require constant learning, making web
            development the ideal profession for me.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col offset-m1">
          <h3>Technical Skills</h3>
          <div id="break"></div>
          <div className="row">
            {technologies.map((tech) => (
              <TechLogo key={tech.id} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
