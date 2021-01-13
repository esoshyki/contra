import Matter from 'matter-js';
import Person from '../renderers/Person';
import Gun from './guns/Weapon';

const idle = [{
  slides: [
    {x: -44, y: 0, w: 45, h: 45, duration: 6},
    {x: -86, y: 0, w: 45, h: 45,  duration: 6},
    {x: -128, y: 0, w: 45, h: 45,  duration: 6},
    {x: -170, y: 0, w: 45, h: 45,  duration: 6},
  ],
  isCycle: true
}]

const moveAnimation = [{
  slides: [
  {x: -7, y: -52, w: 45, h: 45, duration: 6},
  {x: -49, y: -52, w: 45, h: 45, duration: 6},
  {x: -94, y: -52, w: 45, h: 45, duration: 6},
  {x: -139, y: -52, w: 45, h: 45, duration: 6},
  {x: -184, y: -52, w: 45, h: 45, duration: 6},
  {x: -229, y: -52, w: 45, h: 45, duration: 6},
  {x: -274, y: -52, w: 45, h: 45, duration: 6},
  {x: -319, y: -52, w: 45, h: 45, duration: 6},
  {x: -364, y: -52, w: 45, h: 45, duration: 6},
  {x: -409, y: -52, w: 45, h: 45, duration: 6},
  {x: -464, y: -52, w: 45, h: 45, duration: 6},
],
  isCycle: true
}];

const jump = {
  slides: [
  {x: -53, y: -117, w: 50, h: 50, duration: 4},
  {x: -100, y: -117, w: 45, h: 51, duration: 5},
  {x: -141, y: -117, w: 45, h: 51, duration: 6},
  {x: -182, y: -117, w: 42, h: 51, duration: 5},
  {x: -222, y: -115, w: 42, h: 57, duration: 5},
  {x: -264, y: -110, w: 41, h: 78, duration: 5},
  {x: -303, y: -100, w: 41, h: 78, duration: 4},
  ],
  isCycle: false
};

const fall = {
  slides: [ 
    {x: -264, y: -100, w: 41, h: 78, duration: 5},
    {x: -303, y: -100, w: 41, h: 78, duration: 5},
],
  isCycle: true
};

const jumpAnimattion = [
  jump, fall
]

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

const idleFire = [{
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
 isCycle: false}];

const right = "right";
const left = "left";

class Player {
  constructor(entities) {
    this.body = Matter.Bodies.rectangle(200, 600, 45, 45, { mass: 100, density: 10 ** 10, });
    this.size = [45, 45];
    this.isJumping = false;
    this.renderer = Person;
    this.backgroundX = -40;
    this.backgroundY = 0;
    this.angle = 0;
    this.rotate = false;
    this.health = 100;
    this.frameId = 0;
    this.animation = {
      animations: idle,
      animationIdx: 0,
      frameIdx: 0,
      durationIdx: 0,
      isCycle: true
    };
    this.speed = 5;
    this.entities = entities;
    this.weapon = new Gun(this);
  };

  defaultAnimation = () => {
    this.changeAnimation(idle)
  }

  changeAnimation = (animation) => {
    if (this.isJumping) {
      return;
    }
    if (animation !== this.animation.animations) {
      this.animation = {
        animations: animation,
        animationIdx: 0,
        frameIdx: 0,
        durationIdx: 0,
        isCycle: true
      } 
    } 
  };

  animate = () => {

    const { animations, animationIdx, frameIdx, durationIdx } = this.animation;
    const currentAnimation = animations[animationIdx];

    if (!currentAnimation) {
      return this.defaultAnimation()
    };
    
    const slides = currentAnimation.slides;
    const frame = slides[frameIdx];

    if (!frame || !currentAnimation) {
      return this.defaultAnimation();
    };

    const { duration } = frame;
    const { isCycle } = currentAnimation;
  
    if(durationIdx === 0) {
      const { x, y, w, h, } = frame;
      this.backgroundX = x; this.backgroundY = y;
      this.size = [w, h];
    }

    this.animation.durationIdx += 1;

    if (this.animation.durationIdx > duration) {
      this.animation.durationIdx = 0;
      this.animation.frameIdx += 1;

      if (!slides[this.animation.frameIdx]) {
        if (isCycle) {
          this.animation.frameIdx = 0;
        } else {
          this.animation.animationIdx += 1;
          this.animation.frameIdx = 0;
          if (!animations[this.animation.animationIdx]) {
            console.log('here')
            this.defaultAnimation()
          };
        };
      };
    };
  };

  idleRight = () => {
    this.angle = 0;
      this.changeAnimation(idle);
    };

  idleLeft = () => {
    this.angle = -180;
    this.changeAnimation(idle);
  };

  moveRight = () => {
    this.angle = 0;
    Matter.Body.translate(this.body, {x: this.speed, y: 0})
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveRightAndLookUp = () => {
    this.angle = 315;
    Matter.Body.translate(this.body, {x: this.speed, y: 0})
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveRightAndLookDown = () => {
    this.angle = 45;
    Matter.Body.translate(this.body, {x: this.speed, y: 0})
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveLeft = () => {
    this.angle = -180;
    Matter.Body.translate(this.body, {x: -this.speed, y: 0})
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveLeftAndLookUp = () => {
    this.angle = -135;
    Matter.Body.translate(this.body, {x: -this.speed, y: 0})
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveLeftAndLookDown = () => {
    this.angle = -225;
    Matter.Body.translate(this.body, {x: -this.speed, y: 0})
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  rightlookUp = () => {
    this.angle = 270;
    this.changeAnimation(idle);
  };

  leftlookUp = () => {
    this.angle = -90;
    this.changeAnimation(idle);
  };

  rightlookDown = () => {
    this.angle = 90;
    this.changeAnimation(idle);
  };

  leftlookDown = () => {
    this.angle = -270;
    this.changeAnimation(idle);
  };
  
  jump = () => {
    !this.isJumping && this.changeAnimation(jumpAnimattion);
    if (!this.isJumping) {
      Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -5})
      this.isJumping = true;
    }

  }

  fire = () => {
    if (!this.weapon.isReloaded) {
      this.weapon.shoot();
      this.changeAnimation(idleFire)
    };
  };
};

export default Player;


