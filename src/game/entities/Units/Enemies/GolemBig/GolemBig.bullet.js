import Bullet from '../../Bullet/Bullet';
import png from './fire.png';
import categories from '../../../../constraints/colides';
import Matter from 'matter-js';

const asset = `url(${png})`;

const frames = [

  { bgx: 0, bgy: 0, w: 240, h: 240, duration: 2 },
  { bgx: -240, bgy: 0, w: 240, h: 240, duration: 2 },
  { bgx: -480, bgy: 0, w: 240, h: 240, duration: 2 },
  { bgx: -720, bgy: 0, w: 240, h: 240, duration: 2 },
  { bgx: -960, bgy: 0, w: 240, h: 240, duration: 2 },
  { bgx: -1200, bgy: 0, w: 240, h: 240, duration: 2 },
  { bgx: -1440, bgy: 0, w: 240, h: 240, duration: 2 },
  { bgx: -1680, bgy: 0, w: 240, h: 240, duration: 2 },
  { bgx: 0, bgy: -240, w: 240, h: 240, duration: 2 },
  { bgx: -240, bgy: -240, w: 240, h: 240, duration: 2 },
  { bgx: -480, bgy: -240, w: 240, h: 240, duration: 2 },
  { bgx: -720, bgy: -240, w: 240, h: 240, duration: 2 },
  { bgx: -960, bgy: -240, w: 240, h: 240, duration: 2 },
  { bgx: -1200, bgy: -240, w: 240, h: 240, duration: 2 },
  { bgx: -1440, bgy: -240, w: 240, h: 240, duration: 2 },
  { bgx: -1680, bgy: -240, w: 240, h: 240, duration: 2 },
  { bgx: 0, bgy: -480, w: 240, h: 240, duration: 2 },
  { bgx: -240, bgy: -480, w: 240, h: 240, duration: 2 },
  { bgx: -480, bgy: -480, w: 240, h: 240, duration: 2 },
  { bgx: -720, bgy: -480, w: 240, h: 240, duration: 2 },
  { bgx: -960, bgy: -480, w: 240, h: 240, duration: 2 },
  { bgx: -1200, bgy: -480, w: 240, h: 240, duration: 2 },
  { bgx: -1440, bgy: -480, w: 240, h: 240, duration: 2 },
  { bgx: -1680, bgy: -480, w: 240, h: 240, duration: 2 },
  { bgx: 0, bgy: -720, w: 240, h: 240, duration: 2 },
  { bgx: -240, bgy: -720, w: 240, h: 240, duration: 2 },
  { bgx: -480, bgy: -720, w: 240, h: 240, duration: 2 },
  { bgx: -720, bgy: -720, w: 240, h: 240, duration: 2 },
  { bgx: -960, bgy: -720, w: 240, h: 240, duration: 2 },
  { bgx: -1200, bgy: -720, w: 240, h: 240, duration: 2 },
  { bgx: -1440, bgy: -720, w: 240, h: 240, duration: 2 },
  { bgx: -1680, bgy: -720, w: 240, h: 240, duration: 2 },
  { bgx: 0, bgy: -960, w: 240, h: 240, duration: 2 },
  { bgx: -240, bgy: -960, w: 240, h: 240, duration: 2 },
  { bgx: -480, bgy: -960, w: 240, h: 240, duration: 2 },
  { bgx: -720, bgy: -960, w: 240, h: 240, duration: 2 },
  { bgx: -960, bgy: -960, w: 240, h: 240, duration: 2 },
  { bgx: -1200, bgy: -960, w: 240, h: 240, duration: 2 },
  { bgx: -1440, bgy: -960, w: 240, h: 240, duration: 2 },
  { bgx: -1680, bgy: -960, w: 240, h: 240, duration: 2 },
  { bgx: 0, bgy: -1200, w: 240, h: 240, duration: 2 },
  { bgx: -240, bgy: -1200, w: 240, h: 240, duration: 2 },
  { bgx: -480, bgy: -1200, w: 240, h: 240, duration: 2 },
  { bgx: -720, bgy: -1200, w: 240, h: 240, duration: 2 },
  { bgx: -960, bgy: -1200, w: 240, h: 240, duration: 2 },
  { bgx: -1200, bgy: -1200, w: 240, h: 240, duration: 2 },
  { bgx: -1440, bgy: -1200, w: 240, h: 240, duration: 2 },
  { bgx: -1680, bgy: -1200, w: 240, h: 240, duration: 2 },
  { bgx: 0, bgy: -1440, w: 240, h: 240, duration: 2 },
  { bgx: -240, bgy: -1440, w: 240, h: 240, duration: 2 },
  { bgx: -480, bgy: -1440, w: 240, h: 240, duration: 2 },
  { bgx: -720, bgy: -1440, w: 240, h: 240, duration: 2 },
  { bgx: -960, bgy: -1440, w: 240, h: 240, duration: 2 },
  { bgx: -1200, bgy: -1440, w: 240, h: 240, duration: 2 },
  { bgx: -1440, bgy: -1440, w: 240, h: 240, duration: 2 },
  { bgx: -1680, bgy: -1440, w: 240, h: 240, duration: 2 },
  { bgx: 0, bgy: -1680, w: 240, h: 240, duration: 2 },
  { bgx: -240, bgy: -1680, w: 240, h: 240, duration: 2 },
  { bgx: -480, bgy: -1680, w: 240, h: 240, duration: 2 },
  { bgx: -720, bgy: -1680, w: 240, h: 240, duration: 2 },
  { bgx: -960, bgy: -1680, w: 240, h: 240, duration: 2 },
  { bgx: -1200, bgy: -1680, w: 240, h: 240, duration: 2 },
  { bgx: -1440, bgy: -1680, w: 240, h: 240, duration: 2 },
  { bgx: -1680, bgy: -1680, w: 240, h: 240, duration: 2 },

]

const matterProps = {
  mass: 20,
  speed: 15,
  isSensor: true,
  collisionFilter: {
    category: categories.enemyBullet,
    mask: categories.player
  }
}

export default class PlayerBullet extends Bullet {
  constructor({ x, y, speed, angle, factory, damage }) {
    super({
      x, y,
      speed,
      angle,
      factory,
      damage,
      asset,
      bgx: 10, bgy: -980,
      size: [240, 240],
      frames,
      matterProps
    })
    this.start = false;
  };

  move = () => {
    const k = this.angle >= 0 ? -1 : 1;
    this.animate();
    const vector = { x: k * 1, y: -1 };

    if (!this.start) {
      Matter.Body.applyForce(this.body, this.body.position, vector);
      this.start = true;
    };
  };
}