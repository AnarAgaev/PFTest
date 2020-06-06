const reducer = (state, action) => {

  if (state === undefined) {
    return {
      data: [],
      loading: false,
      error: null,

      // Свойства для фильтрации данных формы
      filterArchive: false,
      filterRole: false,
      sortMethod: false,

      // В свойстве employeeForm храним данные
      // формы и ошибки для контроливуемых элементов формы
      employeeForm: {
        name: '',
        phone: '',
        birthday: '',
        role: '',
        isArchive: false,

        // Свойства для ошибок в полях формы
        validName: true,
        validPhone: true,
        validBirthday: true,
        validRole: true
      }
    };
  }

  switch (action.type) {

    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true
      };

    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: [ ...action.data ],
        loading: false,
      };

    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case 'FILTER_ARCHIVE_ITEMS':
      return {
        ...state,
        filterArchive: action.filterState
      };

    case 'FILTER_ROLE_ITEMS':
      return {
        ...state,
        filterRole: action.role
      };

    case 'SORT_DATA':
      return {
        ...state,
        data: [ ...action.data ],
        sortMethod: action.sortMethod
      };

    case 'PUSH_FORM_DATA_TO_STORE':
      return {
        ...state,
        employeeForm: {
          ...state.employeeForm,
          [action.propName]: action.newState
        }
      };

    case 'SET_EMPLOYEE_FORM':
      const { id, name, phone, birthday,
        role, isArchive } = action.payload;

      return {
        ...state,
        employeeForm: {
          ...state.employeeForm,
          id: id,
          name: name,
          phone: phone,
          birthday: birthday,
          role: role,
          isArchive: isArchive
        }
      };

    case 'CLEAN_FORM':
      return {
        ...state,
        employeeForm: {
          name: '',
          phone: '',
          birthday: '',
          role: '',
          isArchive: false,
          validName: true,
          validPhone: true,
          validBirthday: true,
          validRole: true
        }
      };

    case 'ADD_EMPLOYEE':
      return {
        ...state,
        data: [
          ...state.data,
          action.employee
        ]
      };

    case 'UPDATE_EMPLOYEE':
      return {
        ...state,
        data: [ ...action.payload ]
      };

    default:
      return state;
  }
};

export default reducer;