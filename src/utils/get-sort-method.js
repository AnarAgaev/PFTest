const _sortsList = {
  name: 'Имя',
  birthday: 'Дата рождения',
  false: ''
};

const getSortMethod = (method) => {
  return _sortsList[method];
};

export default getSortMethod;