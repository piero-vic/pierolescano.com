import React from 'react';
import styles from './ProjectModal.module.css';

function ProjectModal(props) {
  const { project, toggleModal } = props

  return (
    <div className={`${styles.modalBg} ${styles.modalOff}`}>
      <div className={styles.modal} onClick="">
        {
          project.image &&
          <>
            <img className={styles.modalImg} src={project.image} alt="" />
            <hr />
          </>
        }
        <div className={styles.modalText}>
          <h2>{project.name}</h2>
          <sub className={styles.modalSub}>{project.description}</sub>
          <p>{project.descriptionLong}</p>
          <button className={styles.modalBtn} onClick={toggleModal}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal;