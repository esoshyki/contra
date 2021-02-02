// { x: 0, y: -112, w: 183, h: 140, duration: 70 },
// { x: -183, y: -112, w: 183, h: 140, duration: 70 },
// { x: -366, y: -112, w: 183, h: 140, duration: 70 },
// { x: -549, y: -112, w: 183, h: 140, duration: 70 },
// { x: -732, y: -112, w: 183, h: 140, duration: 70 },
// { x: -915, y: -112, w: 183, h: 140, duration: 70 },
// { x: -1098, y: -112, w: 183, h: 140, duration: 70 },
// { x: -1281, y: -112, w: 183, h: 140, duration: 70 },
// { x: -1464, y: -112, w: 183, h: 140, duration: 70 },
// { x: -1647, y: -112, w: 183, h: 140, duration: 70 },
// { x: -1830, y: -112, w: 183, h: 140, duration: 70 },

const _fly = [
  -732, -915, -1098
];

const fly = [{
  slides: _fly.map((el, idx) => {
    return ({
      backgroundPositionX: el,
      backgroundPositionY: -112,
      width: 183,
      height: 140,
      duration: 6
    })
  }),
  isCycle: true
}];

export default fly