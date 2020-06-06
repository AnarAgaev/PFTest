const pushErrorToStore = (propName, newState) => {
  return {
    type: 'PUSH_FORM_DATA_TO_STORE',
    propName,
    newState
  };
};

export default pushErrorToStore;