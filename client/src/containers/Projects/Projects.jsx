import React from "react";
import { Row, Col } from "react-materialize";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../json/projects.json";

const Projects = () => {
  return (
    <div className="container">
      <h1>Project page</h1>
      <Row>
        {/* maps over json array of objects*/}
        {projects.map(({ id, name, link, gh_link, image, icon, text, tech }) => (
          <ProjectCard
            key={id}
            name={name}
            link={link}
            gh_link={gh_link}
            image={image}
            icon={icon}
            text={text}
            tech={tech}
          />
        ))}
      </Row>
    </div>
  );
};

export default Projects;
