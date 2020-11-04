import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h3>About Me</h3>
      <div className="row">
        <div className="col s12 m4">
          <img src="" alt="" />
        </div>
        <div className="col s12 m6">
          <p>
            I am currently a Georgia Tech bootcamp student based in Atlanta, GA.
            I am studying full stack development and specialize in React,
            Node.js, Express, MongoDB, MySql, jQuery, Pandas, and Jupyter
            Notebooks. I went to school at the University of Georgia and have a
            bachelors degree in Chemistry. If all my code is working you can
            find me playing guitar or any instrument I can get my hands on!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
