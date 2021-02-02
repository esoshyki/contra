// { x: 0, y: -112, w: 183, h: 140, duration: 70 },
// { x: -183, y: -112, w: 183, h: 140, duration: 70 },
// { x: -366, y: -112, w: 183, h: 140, duration: 70 },
// { x: -549, y: -112, w: 183, h: 140, duration: 70 },

const _takeoff = [ 0, -183, -366, -549];

const takeOff = [{
    slides: _takeoff.map((el, idx) => {
      return ({
        backgroundPositionX: el,
        backgroundPositionY: -112,
        width: 183,
        height: 140,
        duration: 6
      })
    }),
    isCycle: false
  }];

export default takeOff
