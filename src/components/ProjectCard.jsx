import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import styles from "./ProjectCard.module.css";

function ProjectCard(props) {
  const { project } = props;

  const [clicked, setClicked] = useState(false);
  const toggleModal = () => setClicked(!clicked);

  return (
    <>
      <div className={styles.projectCard} onClick={toggleModal}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.footer}>
          <ul>
            {project.technologies.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a href={project.repoLink} target="_blank">
            Source Code
          </a>
        </div>
      </div>
      {clicked && <ProjectModal project={project} toggleModal={toggleModal} />}
    </>
  );
}

export default ProjectCard;
