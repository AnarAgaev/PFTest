const _positionList = {
  waiter: 'Официант',
  driver: 'Водитель',
  cook: 'Повар'
};

const getPosition = (position) => {
  return _positionList[position];
};

export {
  _positionList,
  getPosition
};