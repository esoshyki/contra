import Matter from 'matter-js';
import Person from '../renderers/Person';

const idleRight = [
  {x: -44, y: 0, duration: 4},
  {x: -86, y: 0, duration: 4},
  {x: -128, y: 0, duration: 4},
  {x: -170, y: 0, duration: 4},
]

const moveAnimation = [
  {x: -7, y: -52, duration: 4},
  {x: -49, y: -52, duration: 4},
  {x: -94, y: -52, duration: 4},
  {x: -139, y: -52, duration: 4},
  {x: -184, y: -52, duration: 4},
  {x: -229, y: -52, duration: 4},
  {x: -274, y: -52, duration: 4},
  {x: -319, y: -52, duration: 4},
  {x: -364, y: -52, duration: 4},
  {x: -409, y: -52, duration: 4},
  {x: -464, y: -52, duration: 4},
];

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

const idleFire = [
  {x: -36, y: -410, duration: 4},
  {x: -78, y: -410, duration: 4},
  {x: -128, y: -410, duration: 4},
  {x: -169, y: -410, duration: 4},
  {x: -220, y: -410, duration: 4},
  {x: -266, y: -410, duration: 4},
  {x: -316, y: -410, duration: 4},
  {x: -375, y: -410, duration: 4},
  {x: -433, y: -410, duration: 4},
];

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
    this.animation = idleRight;
    this.frame = 0;
    this.looking = {
      up: false,
      down: false
    };
    this.moving = {
      right: false,
      down: false,
      last: right
    }
    this.changeAnimation(this.animation, true)
  };

  animate = () => {
    const { x, y } = this.animation[this.frame];
    this.backgroundX = x;
    this.backgroundY = y;
  }

  changeAnimation = (animation, isCycle) => {
    if (animation === this.animation) {
      return
    }
    clearInterval(this.interval);
    this.frame = 0;
    this.animation = animation;
    this.animate(this.animation, this.frame);
    this.interval = setInterval(() => {
      if (isCycle) {
        this.frame = (this.frame + 1) % this.animation.length;
      } else {
        if (this.animation[this.frame + 1]) {
          this.frame += 1;
        } else {
          this.defaultAnimation()
        }
      }
      this.animate()
    }, 50)
  }

  defaultAnimation = () => {
    if (this.animation === idleRight) {
      return;
    }
    clearInterval(this.interval);
    this.frame = 0;
    this.animation = idleRight;
    this.interval = setInterval(this.animate, 50)
  }

  idleRight = () => {
    this.angle = 0;
    this.defaultAnimation();
  };

  idleLeft = () => {
    this.angle = -180;
    this.defaultAnimation();
  }

  moveRight = () => {
    this.angle = 0;
    !this.isJumping && this.changeAnimation(moveAnimation, true);
  };

  moveRightAndLookUp = () => {
    this.angle = 315;
    !this.isJumping && this.changeAnimation(moveAnimation, true);
  };

  moveRightAndLookDown = () => {
    this.angle = 45;
    !this.isJumping && this.changeAnimation(moveAnimation, true); 
  };

  moveLeft = () => {
    this.angle = -180;
    !this.isJumping && this.changeAnimation(moveAnimation, true);
  };

  moveLeftAndLookUp = () => {
    this.angle = -135;
    !this.isJumping && this.changeAnimation(moveAnimation, true);
  };

  moveLeftAndLookDown = () => {
    this.angle = -225;
    !this.isJumping && this.changeAnimation(moveAnimation, true);
  };

  rightlookUp = () => {
    this.angle = 270;
    !this.isJumping && this.changeAnimation(idleRight, true);
  };

  leftlookUp = () => {
    this.angle = -90;
    !this.isJumping && this.changeAnimation(idleRight, true);
  };

  rightlookDown = () => {
    this.angle = 90;
    !this.isJumping && this.changeAnimation(moveAnimation, true);
  };

  leftlookDown = () => {
    this.angle = -270;
    !this.isJumping && this.changeAnimation(moveAnimation, true);
  };
  
  jump = () => {
    if (!this.isJumping) {
      this.changeAnimation(jumpAnimation);
    }
  }

  fire = () => {
    if (!this.reload) {
      this.reload = true;
      this.changeAnimation(idleFire, false)
      setTimeout(() => {
        this.reload = false;
      }, 300)
    };
  };
};

export default Player;


