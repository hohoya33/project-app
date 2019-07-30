import React, { useContext, useState } from 'react';
import { ProjectContext } from '../../contexts/ProjectContext';

export default function CreateProject(props) {
  const { dispatch } = useContext(ProjectContext);
  const title = useFormInput();
  const content = useFormInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({type: 'CREATE_PROJECT', project: {
      title: title.value,
      content: content.value
    }});
    props.history.push('/');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create new project</h5>

        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" {...title} />
        </div>

        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea id="content" className="materialize-textarea" {...content}></textarea>
        </div>

        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  )
}

function useFormInput(initiaValue) {
  const [value, setValue] = useState(initiaValue || '');

  function handelChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handelChange
  }
}