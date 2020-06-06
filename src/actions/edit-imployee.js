const editEmployee = (updatedEmployee, data) => {
  const idx = data.findIndex(el => el.id === updatedEmployee.id);

  const updatedData = [
    ...data.slice(0, idx),
    updatedEmployee,
    ...data.slice(idx + 1)
  ];

  return {
    type: 'UPDATE_EMPLOYEE',
    payload: updatedData
  };
};

export default editEmployee;