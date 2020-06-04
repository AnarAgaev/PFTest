const fetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST'
  };
};

const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    data
  };
};

const fetchDataFailure = (error) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    error
  };
};

const fetchData = (dispatch, dataService) => {
  dispatch(fetchDataRequest());

  dataService.getData()
    .then((response) => {
      dispatch(fetchDataSuccess(response));
    })
    .catch((error) => {
      console.log('В процессе получения данных возникла ошибка.');
      console.log(error);
      dispatch(fetchDataFailure(error));
    });
};

const filterItemsByArchive = (dispatch, filterState) => {
  dispatch({
    type: 'FILTER_ARCHIVE_ITEMS',
    filterState: !filterState
  });
};

const filterItemsByRole = (dispatch, role) => {
  dispatch({
    type: 'FILTER_ROLE_ITEMS',
    role
  });
};

const sortItemsBy = (dispatch, method, data) => {
  switch (method) {

    case 'name':
      data.sort((a, b) => a.name > b.name ? 1 : -1);
      break;

    case 'birthday':
      const getTimestamp = (data) => {
        const arr = data.split(".");
        return new Date(arr[2], arr[1], arr[0]).getTime();
      };
      data.sort((a, b) => getTimestamp(a.birthday) > getTimestamp(b.birthday) ? 1 : -1);
      break;

    default:
      data.sort((a, b) => a.id > b.id ? 1 : -1);
      break;
  }

  dispatch({
    type: 'SORT_DATA',
    data,
    sortMethod: method
  });
};

export {
  fetchData,
  fetchDataFailure,
  filterItemsByArchive,
  filterItemsByRole,
  sortItemsBy
}