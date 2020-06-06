import React, { Component } from "react";
import { connect } from "react-redux";
import InputMask from "react-input-mask";
import Select from "../select";
import { getEmployee } from "../../actions";
import {Link, withRouter} from "react-router-dom";
import { pushRoleToStore, pushFormDataToStore, formSubmit, cleanForm } from "../../actions";
import "./form-employee.scss";

const roles = [
  { id: 1, val: 'Официант'},
  { id: 2, val: 'Водитель'},
  { id: 3, val: 'Повар'},
];

class FormEmployee extends Component {
  componentDidMount() {
    const { data, employeeId, getEmployee, cleanForm } = this.props;

    console.log('*** Чистим данные и ошибки формы сотрудника перед открытием формы.');
    cleanForm();

    if (employeeId) {
      console.log('*** Получаем дынные редактирумого сотрудника и размещаем в свойствах Store для контролируемых элементов');
      getEmployee(data, employeeId);
    }
  }

  render() {
    const {
      employeeForm, pushValue,
      formSubmit, history,
      btnLabel, employeeId, data
    } = this.props;


    // Data as constants from state of the employee form
    const {
      name, phone, birthday, role,
      isArchive, validName, validPhone,
      validBirthday, validRole
    } = employeeForm;


    return (
      <form
        className="form-employee"
        onSubmit={
          (event) => formSubmit(
            event, name, phone, birthday,
            role, isArchive, history,
            employeeId, data
        )}>

        <div className={`form-employee__group ${!validName && 'has-error'}`}>
          <label htmlFor="name">Имя</label>
          <input type="text"
                 id="name"
                 placeholder="Иванов Иван Иванович"
                 onChange={(event) => pushValue(event, 'name')}
                 value={name}/>
          <span className="error">
          Не корректное Имя
        </span>
        </div>

        <div className={`form-employee__group ${!validPhone && 'has-error'}`}>
          <label htmlFor="phone">Телефон</label>
          <InputMask type="text"
                     mask="+7 (999) 999-9999"
                     id="phone"
                     placeholder="+7 (000) 000-0000"
                     onChange={(event) => pushValue(event, 'phone')}
                     value={phone.value ? phone.value : phone}/>
          <span className="error">
          Не корректный телефон
        </span>
        </div>

        <div className={`form-employee__group ${!validBirthday && 'has-error'}`}>
          <label htmlFor="birthday">Дата рождения</label>
          <InputMask type="text"
                     mask="99.99.9999"
                     id="birthday"
                     placeholder="ДД.ММ.ГГГГ"
                     onChange={(event) => pushValue(event, 'birthday')}
                     value={birthday.value ? birthday.value : birthday}/>
          <span className="error">
          Не корректная дата
        </span>
        </div>

        <div className={`form-employee__group ${!validRole && 'has-error'}`}>
          <label htmlFor="role">Должность</label>
          <Select list={roles}
                  actionFunc={pushRoleToStore}
                  value={role || ''}
                  placeholder={'Выберите должность'}/>
          <span className="error">
          Необходимо выбрать должность
        </span>
        </div>

        <div className="checkbox">
          <input type="checkbox"
                 className="checkbox__controller"
                 id="isArchive"
                 onChange={(event) => pushValue(event, 'isArchive')}
                 checked={isArchive && 'checked'}/>
          <label htmlFor="isArchive">В архиве</label>
        </div>

        <button type="submit" className="button">
          {btnLabel}
        </button>

        <Link to="/" className="button">
          Отмена
        </Link>

      </form>
    );
  };
};

const mapStateToProps = ({ employeeForm, data }) => {
  return { employeeForm, data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    pushValue: (event, propName) => pushFormDataToStore(
      dispatch, event, propName),

    formSubmit: (
      event, name, phone, birthday, role,
      isArchive, history, employeeId,
      data) => formSubmit(
        dispatch, event, name, phone, birthday,
      role, isArchive, history, employeeId, data),

    getEmployee: (data, employeeId) => getEmployee(
      dispatch, data, employeeId),

    cleanForm: () => cleanForm(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(FormEmployee));