import React, {useContext} from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  const { dispatch } = useContext(ProjectContext);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title { id }</span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi possimus a velit iste deserunt quasi dolore eaque! Voluptate adipisci quasi, perspiciatis ipsum eos consectetur voluptatibus possimus reiciendis saepe delectus facilis.</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posty by the Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>

         <div className="center">
          <button className="btn grey" onClick={ () => dispatch({type: 'REMOVE_PROJECT', id}) }>DELETE POST</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;