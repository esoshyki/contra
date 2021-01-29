import png from './Boss.png';
const asset = `url(${png})`;

const idle = [{
  slides: [
    { x: 0, y: 0, w: 225, h: 146, duration: 6 },
    { x: -225, y: 0, w: 225, h: 146, duration: 6 },
    { x: -450, y: 0, w: 225, h: 146, duration: 6 },
    { x: -675, y: 0, w: 225, h: 146, duration: 6 },
    { x: -900, y: 0, w: 225, h: 146, duration: 6 },
    { x: 0, y: -146, w: 225, h: 146, duration: 6 },
    { x: -225, y: -146, w: 225, h: 146, duration: 6 },
    { x: -450, y: -146, w: 225, h: 146, duration: 6 },
    { x: -675, y: -146, w: 225, h: 146, duration: 6 },
    { x: -900, y: -146, w: 225, h: 146, duration: 6 },
    { x: 0, y: -292, w: 225, h: 146, duration: 6 },
    { x: -225, y: -292, w: 225, h: 146, duration: 6 },
    { x: -450, y: -292, w: 225, h: 146, duration: 6 },
    { x: -675, y: -292, w: 225, h: 146, duration: 6 },

    { x: -225, y: -146, w: 225, h: 146, duration: 6 },
    { x: 0, y: -454, w: 225, h: 146, duration: 6 },
    { x: -225, y: -454, w: 225, h: 146, duration: 6 },
    { x: -450, y: -454, w: 225, h: 146, duration: 6 },
  ],
  isCycle: true
}];

const fly = [{
  slides: [
    { w: 150, h:125, x: -50, y: -151, duration: 6},
    { w: 150, h:125, x: -274, y: -151, duration: 6},
    { w: 150, h:125, x: -508, y: -151, duration: 6},
    { w: 150, h:125, x: -508, y: -151, duration: 6},
    { w: 150, h:125, x: -723, y: -151, duration: 6},
    ],
  isCycle: true
}];

const move = [{
  slides: [
    { 
      body: { 
        width: 171, height:140, 
        "background-position-x": -50, "background-position-y": -461, 
      },
      head: { 
        width: 83, height:51, 
        "background-position-x": -190, "background-position-y": -651, 
        top: 33, left: 24,
      },
      duration: 160,
    },

    { 
      body: { 
        width: 171, height:140, 
        "background-position-x": -275, "background-position-y": -461, 
      },
      head: { 
        width: 83, height:51, 
        "background-position-x": -281, "background-position-y": -651, 
        top: 33, left: 24,
      },
      duration: 160,
    },

    { 
      body: { 
        width: 171, height:140, 
        "background-position-x": -500, "background-position-y": -461, 
      },
      head: { 
        width: 83, height:51, 
        "background-position-x": -370, "background-position-y": -651, 
        top: 33, left: 24,
      },
      duration: 160,
      },
    ],
  isCycle: true,
  asset
}];

const jump = {
  slides: [
    { x: -53, y: -117, w: 50, h: 50, duration: 4 },
    { x: -100, y: -117, w: 45, h: 51, duration: 5 },
    { x: -141, y: -117, w: 45, h: 51, duration: 6 },
    { x: -182, y: -117, w: 42, h: 51, duration: 5 },
    { x: -222, y: -115, w: 42, h: 57, duration: 5 },
    { x: -264, y: -110, w: 41, h: 78, duration: 5 },
    { x: -303, y: -100, w: 41, h: 78, duration: 4 },
  ],
  isCycle: false
};

const fall = {
  slides: [
    { x: -264, y: -100, w: 41, h: 78, duration: 5 },
    { x: -303, y: -100, w: 41, h: 78, duration: 5 },
  ],
  isCycle: true
};

const jumpAnimation = [
  jump, fall
]

const runAndFire = [
  { x: -1, y: -232, duration: 6 },
  { x: -54, y: -232, duration: 6 },
  { x: -107, y: -232, duration: 6 },
  { x: -159, y: -232, duration: 6 },
  { x: -212, y: -232, duration: 6 },
  { x: -265, y: -232, duration: 6 },
  { x: -319, y: -232, duration: 6 },
  { x: -370, y: -232, duration: 6 },
  { x: -418, y: -232, duration: 6 },
  { x: -467, y: -232, duration: 6 },
]

const idleFire = [{
  slides: [
    { x: -36, y: -410, w: 45, h: 45, duration: 4 },
    { x: -78, y: -410, w: 45, h: 45, duration: 4 },
    { x: -128, y: -410, w: 45, h: 45, duration: 4 },
    { x: -169, y: -410, w: 45, h: 45, duration: 4 },
    { x: -220, y: -410, w: 45, h: 45, duration: 4 },
    { x: -266, y: -410, w: 45, h: 45, duration: 4 },
    { x: -316, y: -410, w: 45, h: 45, duration: 4 },
    { x: -375, y: -410, w: 45, h: 45, duration: 4 },
    { x: -433, y: -410, w: 45, h: 45, duration: 4 },
  ],
  isCycle: false
}];


const animations = {
  idle, move, jump, fall, jumpAnimation, runAndFire, idleFire
};

export default animations;

