import Matter from 'matter-js';
import Person from '../renderers/Person';

const idle = {
  slides: [
    {x: -44, y: 0, w: 45, h: 45, duration: 40},
    {x: -86, y: 0, w: 45, h: 45,  duration: 40},
    {x: -128, y: 0, w: 45, h: 45,  duration: 40},
    {x: -170, y: 0, w: 45, h: 45,  duration: 40},
  ],
  isCycle: true
}

const moveAnimation = {
  slides: [
  {x: -7, y: -52, w: 45, h: 45, duration: 60},
  {x: -49, y: -52, w: 45, h: 45, duration: 60},
  {x: -94, y: -52, w: 45, h: 45, duration: 60},
  {x: -139, y: -52, w: 45, h: 45, duration: 60},
  {x: -184, y: -52, w: 45, h: 45, duration: 60},
  {x: -229, y: -52, w: 45, h: 45, duration: 60},
  {x: -274, y: -52, w: 45, h: 45, duration: 60},
  {x: -319, y: -52, w: 45, h: 45, duration: 60},
  {x: -364, y: -52, w: 45, h: 45, duration: 60},
  {x: -409, y: -52, w: 45, h: 45, duration: 60},
  {x: -464, y: -52, w: 45, h: 45, duration: 60},
],
  isCycle: true
};

const jumpAnimation = [
  {x: -53, y: -117, w: 50, h: 50, duration: 7},
  {x: -100, y: -117, w: 45, h: 51, duration: 8},
  {x: -141, y: -117, w: 45, h: 51, duration: 8},
  {x: -182, y: -117, w: 42, h: 51, duration: 8},
  {x: -222, y: -122, w: 42, h: 51, duration: 8},
  {x: -264, y: -99, w: 41, h: 70, duration: 8},
  {x: -303, y: -116, w: 41, h: 56, duration: 8},
  {x: -382, y: -116, w: 41, h: 56, duration: 8},
]

const jump = {
  slides: [
  {x: -53, y: -117, w: 50, h: 50, duration: 70},
  {x: -100, y: -117, w: 45, h: 51, duration: 80},
  {x: -141, y: -117, w: 45, h: 51, duration: 100},
  {x: -182, y: -117, w: 42, h: 51, duration: 80},
  {x: -222, y: -115, w: 42, h: 57, duration: 120},
  {x: -264, y: -100, w: 41, h: 78, duration: 120},
  {x: -303, y: -100, w: 41, h: 78, duration: 120},
  ],
  isCycle: false
};

const fall = {
  slides: [
  {x: -264, y: -100, w: 41, h: 78, duration: 120},
  {x: -303, y: -100, w: 41, h: 78, duration: 120},
],
  isCycle: true
};

const runAndFireAnimation = [
  {x: -1, y: -232, duration: 6},
  {x: -54, y: -232, duration: 6}, 
  {x: -107, y: -232, duration: 6}, 
  {x: -159, y: -232, duration: 6},
  {x: -212, y: -232, duration: 6},
  {x: -265, y: -232, duration: 6},
  {x: -319, y: -232, duration: 6},
  {x: -370, y: -232, duration: 6},
  {x: -418, y: -232, duration: 6}, 
  {x: -467, y: -232, duration: 6}, 
]

const idleFire = {
  slides : [
  {x: -36, y: -410, w: 45, h: 45, duration: 4},
  {x: -78, y: -410,  w: 45, h: 45, duration: 4},
  {x: -128, y: -410,  w: 45, h: 45, duration: 4},
  {x: -169, y: -410,  w: 45, h: 45, duration: 4},
  {x: -220, y: -410,  w: 45, h: 45, duration: 4},
  {x: -266, y: -410,  w: 45, h: 45, duration: 4},
  {x: -316, y: -410,  w: 45, h: 45, duration: 4},
  {x: -375, y: -410,  w: 45, h: 45, duration: 4},
  {x: -433, y: -410,  w: 45, h: 45, duration: 4},
],
 isCycle: false};

const right = "right";
const left = "left";

class Player {
  constructor() {
    this.body = Matter.Bodies.rectangle(200, 600, 45, 45, { mass: 100, density: 10 ** 10, });
    this.size = [45, 45];
    this.isJumping = false;
    this.renderer = Person;
    this.backgroundX = -40;
    this.backgroundY = 0;
    this.angle = 0;
    this.rotate = false;
    this.health = 100;
    this.animation = idle;
    this.frameId = 0;
    this.looking = {
      up: false,
      down: false
    };
    this.moving = {
      right: false,
      down: false,
      last: right
    }
    this.animate(idle);
  };

  drawFrame = frame => {
    const { x, y, w, h, duration } = frame;
    this.backgroundX = x;
    this.backgroundY = y;
    this.size = [w, h];
    return duration;
  };

  animate = (..._animations) => {
    const animations = [..._animations];
    let idx;
    let animation;
    clearTimeout(this.timeOut);

    const nextSlide = (slides, isCycle) => {

      const duration = this.drawFrame(slides[this.frameId]);

      if (isCycle) {
        this.frameId = (this.frameId + 1) % slides.length;
        this.timeOut = setTimeout(() => nextSlide(slides, isCycle), duration)  
      } else {
        if (slides[this.frameId + 1]) {
        this.frameId += 1;
        this.timeOut = setTimeout(() => nextSlide(slides, isCycle), duration);
      } else {
        this.frameId = 0;
        nextAnimation()
      }; 
      }
    };
  
    const nextAnimation = () => {
      if (idx === undefined) {
        idx = 0;
      } else if (animations[idx + 1]) {
        idx += 1;
      } else {
        clearTimeout(this.timeOut);
        return;
      };
      animation = animations[idx];
      const slides = animation.slides;
      const isCycle = animation.isCycle;
      nextSlide(slides, isCycle)
    };
  
    nextAnimation()
  };

  changeAnimation = (...animations) => {
    clearTimeout(this.timeOut);
    this.frameId = 0;
    this.animate(...animations);
  }

  idleRight = () => {
    this.angle = 0;
    if (this.animation !== "idleRight") {
      this.animation = "idleRight"
      this.changeAnimation(idle);
    };
  };

  idleLeft = () => {
    this.angle = -180;
    if (this.animation !== "idleLeft") {
      this.animation = "idleLeft"
      this.changeAnimation(idle);
    };
  };

  moveRight = () => {
    this.angle = 0;
    if (this.animation !== "moveRight") {
      this.animation = "moveRight";
      !this.isJumping && this.changeAnimation(moveAnimation);
    }
  };

  moveRightAndLookUp = () => {
    this.angle = 315;
    if (this.animation !== "moveRightAndLookUp") {
      this.animation = "moveRightAndLookUp";
      !this.isJumping && this.changeAnimation(moveAnimation);
    }
  };

  moveRightAndLookDown = () => {
    this.angle = 45;
    if (!this.animation === "moveRightAndLookDown") {
      this.animation = "moveRightAndLookDown";
      !this.isJumping && this.changeAnimation(moveAnimation);
    }
  };

  moveLeft = () => {
    this.angle = -180;
    if (this.animation !== "moveLeft") {
      this.animation = "moveLeft";
      !this.isJumping && this.changeAnimation(moveAnimation);
    }
  };

  moveLeftAndLookUp = () => {
    this.angle = -135;
    if (!this.animation === "moveLeftAndLookUp") {
      this.animation = "moveLeftAndLookUp";
      !this.isJumping && this.changeAnimation(moveAnimation);
    }
  };

  moveLeftAndLookDown = () => {
    this.angle = -225;
    if (!this.animation === "moveLeftAndLookDown") {
      this.animation = "moveLeftAndLookDown";
      !this.isJumping && this.changeAnimation(moveAnimation);
    }
  };

  rightlookUp = () => {
    this.angle = 270;
    if (this.animation !== "rightlookUp") {
      this.animation = "rightlookUp"
      this.changeAnimation(idle);
    };
  };

  leftlookUp = () => {
    this.angle = -90;
    if (this.animation !== "leftlookUp") {
      this.animation = "leftlookUp"
      this.changeAnimation(idle);
    };
  };

  rightlookDown = () => {
    this.angle = 90;
    if (this.animation !== "rightlookDown") {
      this.animation = "rightlookDown"
      this.changeAnimation(idle);
    };
  };

  leftlookDown = () => {
    this.angle = -270;
    if (this.animation !== "leftlookDown") {
      this.animation = "leftlookDown"
      this.changeAnimation(idle);
    };
  };
  
  jump = () => {
    if (!this.isJumping) {
      if (this.animation !== "jump") {
        this.changeAnimation(jump, fall);
      }
    }
  }

  fire = () => {
    if (!this.reload) {
      this.reload = true;
      this.changeAnimation(idleFire)
      setTimeout(() => {
        this.reload = false;
      }, 300)   
    };
  };
};

export default Player;


