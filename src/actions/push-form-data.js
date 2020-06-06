const pushFormDataToStore = (dispatch, event, propName) => {
  const newState = propName === 'isArchive'
    ? event.target.checked
    : event.target.value;

  console.log('*** Меняем данные сотрудника в Store для котролируемых элементов формы.');
  dispatch({
    type: 'PUSH_FORM_DATA_TO_STORE',
    propName,
    newState
  });
};

const pushRoleToStore = (dispatch, role) => {
  console.log('*** Меняем данные сотрудника в Store для котролируемых элементов формы.');
  dispatch({
    type: 'PUSH_FORM_DATA_TO_STORE',
    propName: 'role',
    newState: role
  });
};

export {
  pushFormDataToStore,
  pushRoleToStore
};