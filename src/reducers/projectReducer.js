import uuid from 'uuid/v1';

export const projectReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return [...state, {
        title: action.project.title,
        content: action.project.content,
        authorFirstName: 'HOHO',
        authorLastName: 'Ninja',
        createAt: new Date().toISOString().slice(0, 10),
        id: uuid(),
      }]

    case 'REMOVE_PROJECT':
      console.log('remove');
      return state.filter(project => project.id !== action.id)

    case 'CREATE_PROJECT_ERROR':
      console.log('created project error', action.err);
      return state;

    default:
      return state;
  }
}