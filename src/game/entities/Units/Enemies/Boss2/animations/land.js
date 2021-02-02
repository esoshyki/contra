// { x: -1281, y: -112, w: 183, h: 140, duration: 70 },
// { x: -1464, y: -112, w: 183, h: 140, duration: 70 },
// { x: -1647, y: -112, w: 183, h: 140, duration: 70 },
// { x: -1830, y: -112, w: 183, h: 140, duration: 70 },

const _land = [ -1281, -1464, -1647, -1830];

const land = [{
  slides: _land.map((el, idx) => {
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

export default land
