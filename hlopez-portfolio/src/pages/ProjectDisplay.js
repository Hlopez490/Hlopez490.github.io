import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helperFunctions/ProjectList";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link href={project.link} target="_blank" >
        <GitHubIcon/>
      </Link>


    </div>
  );
}

export default ProjectDisplay;