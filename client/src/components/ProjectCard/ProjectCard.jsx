import React, { PureComponent } from "react";
import { Card, CardTitle, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

const ProjectCard = ({ name, link, gh_link, image, icon, text, tech }) => {
  return (
    <div className="col s12 m4">
      <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={image} reveal waves="light" />}
        reveal={
          <>
            <p>{text}</p>
            <i className={icon}></i>
            <ul>
              {tech.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <p>
              <a href={gh_link}>GitHub</a>
            </p>
          </>
        }
        revealIcon={<Icon>more...</Icon>}
        title={link.length > 0 ? <a href={link}>{name}</a> : name}
      >
        <p>
          <a href={gh_link}>GitHub</a>
        </p>
      </Card>
    </div>
  );
};

export default ProjectCard;
