import fetchDataSuccess from "./fetch-data-success";
import fetchDataRequest from "./fetch-data-request";
import fetchDataFailure from "./fetch-data-failure";

const fetchData = (dispatch, blogService, url) => () => {
  dispatch(fetchDataRequest());

  blogService.getData(url)
    .then((response) => {
      dispatch(fetchDataSuccess(response));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error));
    });
};

export default fetchData;