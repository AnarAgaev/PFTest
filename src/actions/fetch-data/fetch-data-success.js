const fetchDataSuccess = ({ results }) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    data: results
  };
};

export default fetchDataSuccess;