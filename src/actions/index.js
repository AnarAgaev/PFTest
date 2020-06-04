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

export { fetchData, fetchDataFailure }