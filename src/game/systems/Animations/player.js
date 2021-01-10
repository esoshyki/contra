import Matter from 'matter-js';

const idleRight = [
  {x: -44, y: 0, duration: 4},
  {x: -86, y: 0, duration: 4},
  {x: -128, y: 0, duration: 4},
  {x: -170, y: 0, duration: 4},
]

const moveRight = [
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

const jumpFire = [

];

class _PlayerAnimation {
  constructor() {
    this.step = 0;
    this.duration = 0;
    this.steps = idleRight;
  };

  shoot = () => {
    this.restore(idleFire);

  }

  testWorks = (steps, step) => {
    this.restore(steps, step)

    if (this.steps === steps) {
      const bg = [this.steps[this.step].x, this.steps[this.step].y];
      return bg
    }
  }

  works = () => {
    const bg = [this.steps[this.step].x, this.steps[this.step].y]
    if (this.step <= this.steps.length) {
      if (this.duration < this.steps[this.step].duration) {
        this.duration += 1;
      } else {
        if (this.steps !== jump && this.steps !== idleFire) {
          this.step = (this.step + 1) % this.steps.length;
          this.duration = 0;        
        } else {
          this.step = this.step < this.steps.length - 1 ? this.step + 1 : this.steps.length - 1;
          this.duration = 0;
        }
      };
    };
    return bg
  };

  restore = (steps, step) => {
    this.steps = steps;
    this.duration = 0;
    this.step = step || 0;
  }
};

const animate = new _PlayerAnimation();

const PlayerAnimation = (entities, screen) => {

  const player = entities.player;

  const createResult = (bgx, bgy) => {

    player.backgroundX = bgx;
    player.backgroundY = bgy;
    player.rotate = player.direction === "right" ? false : true;
  }

  if (!player) {
    return entities
  }

  if (player.reload) {
    const [bgx, bgy] = animate.works();
    createResult(bgx, bgy);
    return entities
  }

  if (player.fire) {
    animate.shoot();
    setTimeout(() => {
      player.reload = false;
    }, 200)
    

    return entities
  }

  if (player.isJumping) {
    if (animate.steps !== jump) {
      animate.restore(jump);
    }
  } else if (!player.moving) {
      if (animate.steps !== idleRight) {
      animate.restore(idleRight);
    };
  } else if (player.moving) {
    if (animate.steps !== moveRight) {
      animate.restore(moveRight);
    }
  };

  const [bgx, bgy] = animate.works();
  createResult(bgx, bgy);
  
  return entities

}

export default PlayerAnimation