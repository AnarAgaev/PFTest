const _positionList = {
  waiter: 'Официант',
  driver: 'Водитель',
  cook: 'Повар'
};

const getPosition = (position) => {
  return _positionList[position];
};

const getRole = (position) => {
  for (let key in _positionList) {
    if (_positionList[key] === position) {
      return key;
    }
  }
};

export {
  _positionList,
  getPosition,
  getRole
};