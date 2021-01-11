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

const jump = [
  {x: -58, y: -122, duration: 7},
  {x: -100, y: -122, duration: 8},
  {x: -141, y: -122, duration: 8},
  {x: -181, y: -122, duration: 8},
  {x: -221, y: -122, duration: 8},
  {x: -263, y: -120, duration: 8},
  {x: -302, y: -120, duration: 8},
  {x: -341, y: -122, duration: 8},
  {x: -384, y: -122, duration: 8}, 
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

  moveRight = () => {
    if (this.moving.right) {
      return;
    }
    this.moving.right = true;
    this.moving.left = false;
    this.angle = this.looking.up ? -45 : this.looking.down ? 45 : 0;
    if (this.animation !== moveAnimation) {
      this.changeAnimation(moveAnimation, true);
    }
  };

  moveLeft = () => {
    if (this.moving.left) {
      return;
    }
    this.moving.left = true;
    this.moving.right = false;
    this.moving.last = left;
    this.angle = this.looking.up ? -135 : this.looking.down ? 135 : 180;
    if (this.animation !== moveAnimation) {
      this.changeAnimation(moveAnimation, true);
    }
  };

  stop = () => {
    this.moving = { right: false, left: false };
    this.defaultAnimation();
  };

  lookUp = () => {
    this.looking = { up: true, down: false };
  };

  unlookUp = () => {
    this.looking.up = false;
    this.defaultAnimation()
  };

  lookDown = () => {
    this.looking = { up: false, down: true };
  };

  unlookDown = () => {
    this.looking.down = false;
    this.defaultAnimation()
  }

  jump = () => {
    if (!this.isJumping) {
      this.isJumping = true;
      Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -5})
    }
  }

};

export default Player;


