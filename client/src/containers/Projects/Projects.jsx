import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../json/projects.json";
import "./Projects.css"

const Projects = () => {
  return (
    <div className="container">
      <div className="row">
      <h3 className="center" id="projects">Projects</h3>
        {/* maps over json array of project details and images*/}
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
