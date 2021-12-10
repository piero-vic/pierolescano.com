import React from 'react';
import styles from './ProjectModal.module.css';

function ProjectModal(props) {
  const { project, toggleModal } = props

  return (
    <div className={`${styles.modalBg} ${styles.modalOff}`}>
      <div className={styles.modal}>
        {
          project.name === 'todo'
          ? <div id="termynal" data-termynal className={`${styles.terminal} ${styles.shadow}`}>
              <span data-ty="input">td</span>
              <br />
              <span data-ty data-ty-delay="250"> 1 | <span style={{color: "#f7768e"}}>✕</span> Send Report</span>
              <span data-ty data-ty-delay="300" > 2 | <span style={{color: "#9ece6a"}}>✓</span> Pickup groceries</span>
              <span data-ty data-ty-delay="350"> 3 | <span style={{color: "#f7768e"}}>✕</span> Update portfolio</span>
            </div>
          : project.image && <img className={`${styles.modalImg} ${styles.shadow}`} src={project.image} alt="" />
        }
        <hr />
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