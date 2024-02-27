type moveEvents = 'touchmove' | 'mousemove';
type upEvents = 'touchend' | 'mouseup';

interface returnProp {
  move: moveEvents;
  up: upEvents;
}

const getDeviceEventNames = (): returnProp => {
  if (isTouchDevice()) {
    return {
      move: 'touchmove',
      up: 'touchend'
    };
  }
  return {
    move: 'mousemove',
    up: 'mouseup'
  };
};

const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};

export default getDeviceEventNames;
