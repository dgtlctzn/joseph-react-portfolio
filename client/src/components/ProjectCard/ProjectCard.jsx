import React, { PureComponent } from "react";
import { Card, CardTitle, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import "./ProjectCard.css"

const ProjectCard = (props) => {
  return (
    <Card className="project-card"
      closeIcon={<Icon>close</Icon>}
      header={
        <CardTitle
          image="https://materializecss.com/images/sample-1.jpg"
          reveal
          waves="light"
        />
      }
      reveal={
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      }
      revealIcon={<Icon>more_vert</Icon>}
      title={props.name}
    >
      <p>
        <Link href="/">This is a link</Link>
      </p>
    </Card>
  );
};

export default ProjectCard;
