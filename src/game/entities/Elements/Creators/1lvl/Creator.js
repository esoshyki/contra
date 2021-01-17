import Static from '../../Statics/Static';
import Backgorund from '../../Backgrounds/'
import png from './lvl1.png';

const asset = `url(${png})`

/* Углы */

const xRightGround = { w: 75, h: 75, bgx: -354, bgy: -189};
const xyRightGround = { w: 75, h: 75, bgx: -269, bgy: -189};
const yRightGround = { w: 75, h: 75, bgx: -269, bgy: -104};

const xyLeftGround = { w: 75, h: 75, bgx: -98, bgy: -189};
const xLeftGround = { w: 75, h: 75, bgx: -14, bgy: -189}; 
const yLeftGround = { w: 75, h: 75, bgx: -98, bgy: -104};

/* Выступы */
const rightLedgeGround = { w: 75, h: 75, bgx: -354, bgy: -272};
const middleLedgeGround = { w: 75, h: 75, bgx: -185, bgy: -189};
const leftLedgeGround = { w: 75, h: 75, bgx: -14, bgy: -272}; 

/* Карнизы */
const rightCorniceGround = { w: 75, h: 57, bgx: -269, bgy: -272};
const middleCorniceGround = { w: 75, h: 57, bgx: -185, bgy: -272};
const leftCorniceGround = { w: 75, h: 57, bgx: -98, bgy: -272};

/* Внутри */
const insideGround = { w: 75, h: 75, bgx: -185, bgy: -104};

/* Верхняя часть */
const upRightGround = { w: 75, h: 75, bgx: -269, bgy: -20};
const upMiddleGround = { w: 75, h: 75, bgx: -185, bgy: -20};
const upLeftGround = { w: 75, h: 75, bgx: -98, bgy: -20};

/* Вода */

const waterInside = { w: 75, h: 75, bgx: -353, bgy: -104};
const watterUp = { w: 75, h: 75, bgx: -353, bgy: -20};

const box = { w: 44, h: 45, bgx: -455, bgy: -33};

const plate = { w: 36, h: 38, bgx: -514, bgy: -39};
const pointer = { w: 36, h: 38, bgx: -567, bgy: -39};

const mashroomOrange = { w: 29, h: 23, bgx: -649, bgy: -53};
const mashroomPink = { w: 29, h: 23, bgx: -616, bgy: -53};

const stump = { w: 76, h: 25, bgx: -696, bgy: -68};

const tree1 = { w: 167, h: 182, bgx: -448, bgy: -91};
const tree2 = { w: 167, h: 165, bgx: -620, bgy: -107};

const bigbush1 = { w: 82, h: 38, bgx: -479, bgy: -301};
const bigbush2 = { w: 82, h: 38, bgx: -566, bgy: -301};
const smallbush1 = { w: 42, h: 38, bgx: -672, bgy: -307};
const smallbush2 = { w: 42, h: 38, bgx: -726, bgy: -301};

export default {
  xRightGround: (factory) => new Static({asset, ...xRightGround, factory}),
  xyRightGround: (factory) => new Static({asset, ...xyRightGround, factory}),
  yRightGround: (factory) => new Static({asset, ...yRightGround, factory}),
  xyLeftGround: (factory) => new Static({asset, ...xyLeftGround, factory}),
  xLeftGround: (factory) => new Static({asset, ...xLeftGround, factory}),
  yLeftGround: (factory) => new Static({asset, ...yLeftGround, factory}),
  rightLedgeGround: (factory) => new Static({asset, ...rightLedgeGround, factory}),
  middleLedgeGround: (factory) => new Static({asset, ...middleLedgeGround, factory}),
  leftLedgeGround: (factory) => new Static({asset, ...leftLedgeGround, factory}),
  rightCorniceGround: (factory) => new Static({asset, ...rightCorniceGround, factory}),
  middleCorniceGround: (factory) => new Static({asset, ...middleCorniceGround, factory}), 
  leftCorniceGround: (factory) => new Static({asset, ...leftCorniceGround, factory}), 
  insideGround: (factory) => new Static({asset, ...insideGround, factory}), 
  upRightGround: (factory) => new Static({asset, ...upRightGround, factory}), 
  upMiddleGround: (factory) => new Static({asset, ...upMiddleGround, factory}), 
  upLeftGround: (factory) => new Static({asset, ...upLeftGround, factory}), 
  waterInside: (factory) => new Static({asset, ...waterInside, factory}),
  watterUp: (factory) => new Static({asset, ...watterUp, factory}),
  staticBox: factory => new Static({asset, ...box, factory}),
  backgroundBox: factory => new Backgorund({asset, ...box, factory }),
  plate: factory => new Backgorund({asset, ...plate, factory }),
  pointer: factory => new Backgorund({asset, ...pointer, factory }),
  mashroomOrange: factory => new Backgorund({asset, ...mashroomOrange, factory }),
  mashroomPink: factory => new Backgorund({asset, ...mashroomPink, factory }),
  stump = factory => new Backgorund({asset, ...stump, factory }),
  tree1 = factory => new Backgorund({asset, ...tree1, factory }),
  tree2 = factory => new Backgorund({asset, ...tree2, factory }),
  bigbush1 = factory => new Backgorund({asset, ...bigbush1, factory }),
  bigbush2 = factory => new Backgorund({asset, ...bigbush2, factory }),
  smallbush1 = factory => new Backgorund({asset, ...smallbush1, factory }),
  smallbush2 = factory => new Backgorund({asset, ...smallbush2, factory }), 
}