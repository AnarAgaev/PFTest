import {getPosition} from "../utils";

const setEmployee = (employee) => {
  return {
    type: 'SET_EMPLOYEE_FORM',
    payload: employee
  };
};

const getEmployee = (dispatch, data, employeeId) => {
  const employee = data.filter( el => el.id === parseInt(employeeId));

  employee[0].role = getPosition(employee[0].role);
  dispatch(setEmployee(employee[0]));
};

export default getEmployee;