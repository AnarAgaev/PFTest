const filterItemsByArchive = (dispatch, filterState) => {

  console.log('*** Фильтруем сотрудников по состоянию В архиве.');
  dispatch({
    type: 'FILTER_ARCHIVE_ITEMS',
    filterState: !filterState
  });
};

const filterItemsByRole = (dispatch, role) => {

  console.log('*** Фильтруем сотрудников по Должности.');
  dispatch({
    type: 'FILTER_ROLE_ITEMS',
    role
  });
};

export {
  filterItemsByArchive,
  filterItemsByRole
}