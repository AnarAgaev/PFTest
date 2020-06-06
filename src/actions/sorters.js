const sortItemsBy = (dispatch, method, data) => {
  switch (method) {

    case 'name':
      console.log('*** Сортируем список сотрудников по Имени.');
      data.sort((a, b) => a.name > b.name ? 1 : -1);
      break;

    case 'birthday':
      console.log('*** Сортируем список сотрудников по Дате рождения.');
      const getTimestamp = (data) => {
        const arr = data.split(".");
        return new Date(arr[2], arr[1], arr[0]).getTime();
      };
      data.sort((a, b) => getTimestamp(a.birthday) > getTimestamp(b.birthday) ? 1 : -1);
      break;

    default:
      console.log('*** Рассортировываем список сотрудников = Сортируем по ID.');
      data.sort((a, b) => a.id > b.id ? 1 : -1);
      break;
  }

  dispatch({
    type: 'SORT_DATA',
    data,
    sortMethod: method
  });
};

export { sortItemsBy };