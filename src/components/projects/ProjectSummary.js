import React from 'react'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">{project.title}</div>
        <p>Posty by the {project.authorLastName} {project.authorFirstName}</p>
        <p className="grey-text">{project.createAt}</p>
      </div>
    </div>
  )
}

export default ProjectSummary;