const _positionList = {
  waiter: 'официант',
  driver: 'водитель',
  cook: 'повар'
};

const getPosition = (position) => {
  return _positionList[position];
};

export {
  _positionList,
  getPosition
};