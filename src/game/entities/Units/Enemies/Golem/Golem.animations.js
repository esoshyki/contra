import png from './Golem.png';

const asset = `url(${png})`;

const idle = [{
  slides: [
    { x: -25, y: -473, w: 113, h: 130, duration: 6 },
    { x: -144, y: -473, w: 113, h: 130, duration: 6 },
    { x: -266, y: -473, w: 113, h: 130, duration: 6 },
    { x: -388, y: -473, w: 113, h: 130, duration: 6 },
    { x: -523, y: -473, w: 113, h: 130, duration: 6 },
    { x: -650, y: -473, w: 113, h: 130, duration: 6 },
    { x: -765, y: -473, w: 113, h: 130, duration: 6 },
    { x: -870, y: -473, w: 113, h: 130, duration: 6 },
    { x: -978, y: -473, w: 93, h: 130, duration: 6 },
    { x: -1066, y: -473, w: 113, h: 130, duration: 6 },
    { x: -1176, y: -473, w: 113, h: 130, duration: 6 },
  ],
  isCycle: true,
  asset
}]

const move = [{
  slides: [
    { w: 90, h:85, x: -21, y: -364, duration: 5},
    { w: 90, h:85, x: -113, y: -364, duration: 5},   
    { w: 90, h:85, x: -206, y: -364, duration: 5},  
    { w: 90, h:85, x: -301, y: -364, duration: 5},
    { w: 90, h:85, x: -404, y: -364, duration: 5},
    { w: 90, h:85, x: -504, y: -364, duration: 5},  
    { w: 90, h:85, x: -591, y: -364, duration: 5},  
    { w: 90, h:85, x: -671, y: -364, duration: 5},  
    { w: 90, h:85, x: -747, y: -364, duration: 5},  
    { w: 90, h:85, x: -821, y: -364, duration: 5},  
    { w: 90, h:85, x: -906, y: -364, duration: 5}, 
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
  isCycle: false,
  asset
};

const fall = {
  slides: [
    { x: -264, y: -100, w: 41, h: 78, duration: 5 },
    { x: -303, y: -100, w: 41, h: 78, duration: 5 },
  ],
  isCycle: true,
  asset
};

const jumpAnimattion = [
  jump, fall
]

const cast = [{
  slides: [
    { w: 90, h:90, x: -24, y: -114, duration: 6},
    { w: 90, h:90, x: -117, y: -114, duration: 6},  
    { w: 90, h:90, x: -207, y: -114, duration: 6},   
    { w: 90, h:90, x: -302, y: -114, duration: 6},  
    { w: 90, h:90, x: -393, y: -114, duration: 6},
    { w: 90, h:90, x: -482, y: -114, duration: 6},
    { w: 90, h:90, x: -572, y: -114, duration: 6},  
  ],
  isCycle: false,
  asset
}];



const idleFire = [{
  slides: [
    { x: -48, y: -148, w: 105, h: 130, duration: 4 },
    { x: -165, y: -148, w: 105, h: 130, duration: 4 },
    { x: -293, y: -148, w: 105, h: 130, duration: 4 },
    { x: -412, y: -148, w: 105, h: 130, duration: 4 },
    { x: -517, y: -148, w: 105, h: 130, duration: 4 },
    { x: -634, y: -148, w: 105, h: 130, duration: 4 },
    { x: -754, y: -148, w: 105, h: 130, duration: 4 },
  ],
  isCycle: true,
  asset
}];

const animations = {
  idle, move: move, jump, fall, jumpAnimattion, cast, idleFire
};

export default animations;

