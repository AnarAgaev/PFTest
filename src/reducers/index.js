const reducer = (state, action) => {

  if (state === undefined) {
    return {
      data: [],
      loading: false,
      error: null,
      filterArchive: false,
      filterRole: false,
      sortMethod: false
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

    default:
      return state;
  }
};

export default reducer;