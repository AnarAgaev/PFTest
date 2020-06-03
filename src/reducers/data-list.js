const updateData = (state, action) => {

  if (state === undefined) {
    return {
      data: [],
      loading: false,
      error: null
    };
  }

  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state.dataList,
        loading: true
      };

    case 'FETCH_DATA_SUCCESS':
      const { data } = action;
      return {
        ...state.dataList,
        data: [
          ...data
        ],
        loading: false
      };

    case 'FETCH_DATA_FAILURE':
      return {
        ...state.dataList,
        loading: false,
        error: action.payload
      };

    default:
      return state.dataList;
  }
};

export default updateData;