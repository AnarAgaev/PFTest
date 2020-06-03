import updateData from "./data-list";

const reducer = (state, action) => {

  return {
    dataList: updateData(state, action),
  };
};

export default reducer;