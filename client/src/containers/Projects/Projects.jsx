import React from "react";
import { Row, Col } from "react-materialize";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const projects = ["one", "two", "three", "four"];

  return (
    <div className="container">
      <h1>Project page</h1>
      <Row>
        {projects.map((project) => (
          <ProjectCard name={project} />
        ))}
      </Row>
    </div>
  );
};

export default Projects;
