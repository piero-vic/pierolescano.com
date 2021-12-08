import React from 'react';
import styles from './ProjectModal.module.css';

function ProjectModal(props) {
  const { project, toggleModal } = props

  return (
    <div className={`${styles.modalBg} ${styles.modalOff}`}>
      <div className={styles.modal}>
        {
          project.image &&
          <>
            <img className={styles.modalImg} src={project.image} alt="" />
            <hr />
          </>
        }
        <div className={styles.modalText}>
          <h2>{project.name}</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore voluptates tempore veniam earum atque odit quod laborum expedita aut itaque. Quasi tenetur error necessitatibus commodi tempore. Sit quaerat omnis eaque delectus consequuntur, totam in quod blanditiis voluptas alias illum, maxime sed culpa minima eum error, id unde ad assumenda veritatis?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore voluptates tempore veniam earum atque odit quod laborum expedita aut itaque. Quasi tenetur error necessitatibus commodi tempore. Sit quaerat omnis eaque delectus consequuntur, totam in quod blanditiis voluptas alias illum, maxime sed culpa minima eum error, id unde ad assumenda veritatis?</p>
          <button onClick={toggleModal}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal;