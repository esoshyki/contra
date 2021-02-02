import png from './Boss.png';
const asset = `url(${png})`;

const idle = [{
  slides: [

    { 
      body: { 
        width: 171, height: 146, 
        backgroundPositionX: -50, backgroundPositionY: 0, 
      },
      head: { 
        width: 83, height:51, 
        backgroundPositionX: -190, backgroundPositionY: -651, 
        top: 21, left: 27,
      },
      duration: 4,
    },

    { 
      body: { 
        width: 176, height: 146, 
        backgroundPositionX: -269, backgroundPositionY: 0, 
      },
      head: { 
        width: 83, height: 51, 
        backgroundPositionX: -183, backgroundPositionY: -651, 
        top: 21, left: 27,
      },
      duration: 4,
    },

    { 
      body: { 
        width: 176, height: 146, 
        backgroundPositionX: -494, backgroundPositionY: 0, 
      },
      head: { 
        width: 83, height: 51, 
        backgroundPositionX: -183, backgroundPositionY: -651, 
        top: 21, left: 27,
      },
      duration: 4,
    },

    { 
      body: { 
        width: 176, height: 146, 
        backgroundPositionX: -710, backgroundPositionY: 0, 
      },
      head: { 
        width: 83, height: 51, 
        backgroundPositionX: -183, backgroundPositionY: -651, 
        top: 27, left: 27,
      },
      duration: 4,
    },

    { 
      body: { 
        width: 176, height: 146, 
        backgroundPositionX: -932, backgroundPositionY: 0, 
      },
      head: { 
        width: 83, height: 51, 
        backgroundPositionX: -183, backgroundPositionY: -651, 
        top: 39, left: 27,
      },
      duration: 4,
    },

  ],
  isCycle: true,
  asset
}];

const startFly = [{
  slides: [

    { 
      body: { 
        width: 112, height: 115, 
        "background-position-x": -4, "background-position-y": -140, 
      },
      duration: 160
    },

    { 
      body: { 
        width: 150, height: 115, 
        "background-position-x": -117, "background-position-y": -140, 
      },
      duration: 160 
    },

    { 
      body: { 
        width: 171, height: 115, 
        "background-position-x": -269, "background-position-y": -140, 
      },
      duration: 160 
    },

    ],
    isCycle: false,
    asset
  }];

const fly = [{
  slides: [

    { 
      body: { 
        width: 173, height: 115, top: 0,
        "background-position-x": -444, "background-position-y": -140, 
      },
      duration: 160 
    },

    { 
      body: { 
        width: 173, height: 137, top: -40,
        "background-position-x": -816, "background-position-y": -115, 
      },
      duration: 160 
    },
    
    ],
    isCycle: true,
    asset
  }];

const move = [{
  slides: [
    { 
      body: { 
        width: 171, height:140, 
        backgroundPositionX: -50, backgroundPositionY: -461, 
      },
      head: { 
        width: 83, height:51, 
        backgroundPositionX: -190, backgroundPositionY: -651, 
        top: 33, left: 24,
      },
      duration: 6,
    },

    { 
      body: { 
        width: 171, height:140, 
        backgroundPositionX: -275, backgroundPositionY: -461, 
      },
      head: { 
        width: 83, height:51, 
        backgroundPositionX: -281, backgroundPositionY: -651, 
        top: 33, left: 24,
      },
      duration: 6,
    },

    { 
      body: { 
        width: 171, height:140, 
        backgroundPositionX: -500, backgroundPositionY: -461, 
      },
      head: { 
        width: 83, height:51, 
        backgroundPositionX: -370, backgroundPositionY: -651, 
        top: 33, left: 24,
      },
      duration: 6,
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

