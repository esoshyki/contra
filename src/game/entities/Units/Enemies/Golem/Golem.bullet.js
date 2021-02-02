import Bullet from '../../Bullet/Bullet';
import png from './Golem.png';
import categories from '../../../../constraints/colides';
import Matter from 'matter-js';

const asset = `url(${png})`;

const frames = [
  { w: 40, h:40, bgx: -44, bgy: -218, duration: 6},
  { w: 40, h:40, bgx: -102, bgy: -218, duration: 6},
  { w: 40, h:40, bgx: -155, bgy: -218, duration: 6},
  { w: 40, h:40, bgx: -155, bgy: -218, duration: 6}, 
  { w: 40, h:40, bgx: -210, bgy: -218, duration: 6}, 
  { w: 40, h:40, bgx: -273, bgy: -218, duration: 6}, 
  { w: 40, h:40, bgx: -333, bgy: -218, duration: 6}, 
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
      size: [40, 40],
      frames,
      matterProps
    })
    this.start = false;
  };

  move = () => {
    const k = this.angle >= 0 ? -1 : 1;
    this.animate();
    const vector = { x: k * 1, y: -1 };

    this.distance += this.speed;

    if (this.distance > 600) {
      this.factory.removeUnit(this);
    };

    if (!this.start) {
      Matter.Body.applyForce(this.body, this.body.position, vector);
      this.start = true;
    };
  };
}