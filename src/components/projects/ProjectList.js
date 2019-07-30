import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../../contexts/ProjectContext';
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {
  const { projects } = useContext(ProjectContext);
  return projects.length ? (
    <div className="project-list section">
      {
        projects.map(project => {
          return (
            <Link to={'/project/' + project.id} key={project.id}>
              <ProjectSummary project={project} />
            </Link>
          );
        })
      }
    </div>
  ) : (
    <div className="empty">No project to read.</div>
  );
}

export default ProjectList;