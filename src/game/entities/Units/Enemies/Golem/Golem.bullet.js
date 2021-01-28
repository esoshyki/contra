import Bullet from '../../../Weapon/Bullet/Bullet';
import png from './Golem.png';

const asset = `url(${png})`;

const frames = [
  { w: 51, h: 51, bgx: -59, bgy: -282, duration: 5 },
  { w: 51, h: 51, bgx: -134, bgy: -282, duration: 5 },
  { w: 51, h: 51, bgx: -201, bgy: -282, duration: 5 },
  { w: 51, h: 51, bgx: -355, bgy: -282, duration: 5 },
  { w: 51, h: 51, bgx: -433, bgy: -282, duration: 5 },
  { w: 51, h: 51, bgx: -514, bgy: -282, duration: 5 },
]

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
      size: [51, 51],
      frames
    })
  }
}