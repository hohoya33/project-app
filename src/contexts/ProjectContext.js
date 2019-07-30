import React, { createContext, useReducer, useEffect } from 'react';
import { projectReducer } from '../reducers/projectReducer';
import firebase from '../config/firebase';

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  //const [project, dispatch] = useReducer(projectReducer, []);
  const [projects, dispatch] = useReducer(projectReducer, [], () => {
    //localStorage
    console.log('localStorage getItem');

    const unsubscribe = firebase.firestore().collection('projects').onSnapshot((snapshot) => {
      const newProject = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log(newProject);
      //dispatch({ type: 'CREATE_PROJECT', project })
    }, (error) => {
       //dispatch({ type: 'CREATE_PROJECT_ERROR', error })
    });


    const localData = localStorage.getItem('projects');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    //데이터 저장
    console.log('localStorage setItem');
    console.log('localStorage setItem projects', projects);
    localStorage.setItem('projects', JSON.stringify(projects));

    // firebase.firestore().collection('projects').add({
    //   ...project,
    //   authorFirstName: 'HOHO',
    //   authorLastName: 'Ninja',
    //   authorId: 12345,
    //   createAt: new Date()
    // }).then(() => {
    //   dispatch({ type: 'CREATE_PROJECT', project })
    // }).catch((err) => {
    //   dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    // })

  }, [projects]);

  return (
    <ProjectContext.Provider value={{projects, dispatch}}>
      { props.children }
    </ProjectContext.Provider>
  )
}

export default ProjectContextProvider;