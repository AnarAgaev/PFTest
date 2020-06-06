import { pushErrorToStore, addEmployee, cleanForm, editEmployee } from "../actions";
import { getRole } from "../utils";
import React from "react";
import routing from "./routing";

const formSubmit = (
    dispatch, event, name,
    phone, birthday,
    role, isArchive,
    history, employeeId,
    data
  ) => {

  event.preventDefault();

  const validName = name !== '';
  const validPhone = !!phone.match(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{5,10}$/i);
  const validBirthday = !!birthday.match(/^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/i);
  const validRole = role !== '';

  const pushFunc = (prop, propName) => {
    if (prop) {
      dispatch(pushErrorToStore(propName, true ));
    } else {
      dispatch(pushErrorToStore(propName, false ));
    }
  };

  console.log('*** Валидируем Имя и меняем состояние ошибки Имени.');
  pushFunc(validName, 'validName');

  console.log('*** Валидируем Телефон и мняем состояние ошибки Телефона.');
  pushFunc(validPhone, 'validPhone');

  console.log('*** Валидируем Дату рождения и меняем состояние ошибки Даты рождения.');
  pushFunc(validBirthday, 'validBirthday');

  console.log('*** Валидируем Должность и меняем состояние ошибки Должности.');
  pushFunc(validRole, 'validRole');

  if (validName && validPhone && validBirthday && validRole) {

    /*
      * !!! В том случае если мы добавляем нового сотрудника:
      * Идентификатор для добавляемого сотрудники формируется как большое случайное число
      * Данное решение не совсем корректно, так как теоритически возможны совпадения.
      * В реальной практике за унакльность ИД, как правило, отвечает БД и так как это тестовое
      * задание, я посчитале что нет необходимости проверять все ИД имеющихся сотрудников и
      * формировать строго уникальное занчение идентификатора.
    */
    let id;
    if (!employeeId) {
      id = Math
        .floor(Math
          .random() * 9999999);
    } else {
      id = parseInt(employeeId);
    }

    const employee = {
      id: id,
      name: name,
      isArchive: isArchive,
      role: getRole(role),
      phone: phone,
      birthday: birthday
    };


    if (employeeId) {
      console.log('*** Обновляем данные сотрудника.');
      dispatch(editEmployee(employee, data));
    } else {
      console.log('*** Добавляем нового сотрудника.');
      dispatch(addEmployee(employee));
    }

    console.log('*** Диспатчим роутетинг на главную страницу.');
    dispatch(routing(history, 'push', '/'));
  }
};

export default formSubmit;