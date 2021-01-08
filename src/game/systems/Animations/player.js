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

class _PlayerAnimation {
  constructor() {
    this.step = 0;
    this.duration = 0;
    this.steps = idleRight;
  };

  works = () => {
    const step = this.step;
    const steps = this.steps;
    const bg = [steps[step].x, steps[step].y]
    if (step <= steps.length) {
      if (this.duration < steps[step].duration) {
        this.duration += 1;
      } else {
        this.step = (step + 1) % steps.length;
        this.duration = 0;
      }
    }
    return bg
  };
}

const animate = new _PlayerAnimation();

const PlayerAnimation = (entities, screen) => {
  const person = entities.person;

  if (!person.moving) {
    if (animate.steps !== idleRight) {
      animate.steps = idleRight
      animate.step = 0;
      animate.duration = 0;
      console.log('here')
    }
  }

  if (person.moving) {
    if (animate.steps !== moveRight) {
      animate.steps = moveRight;
      animate.step = 0;
      animate.duration = 0;
    }
  }

  const [bgx, bgy] = animate.works();
  person.backgroundX = bgx;
  person.backgroundY = bgy;
  person.rotate = person.direction === "right" ? false : true;
  return entities

}

export default PlayerAnimation