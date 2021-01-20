import png from './bullet.hit1.png';
import Effect from '../Effect';

const asset = `url(${png})`;

const animation = {
  slides: [
    { x: 0, y: 0, w: 35, h: 31, duration: 3, scale: 0.2 },
    { x: 0, y: 0, w: 35, h: 31, duration: 3, scale: 0.4 },
    { x: 0, y: 0, w: 35, h: 31, duration: 3, scale: 0.5 },
    { x: 0, y: 0, w: 35, h: 31, duration: 3, scale: 0.8 },
    { x: 0, y: 0, w: 35, h: 31, duration: 3, scale: 1 },
  ],
  isCycle: false
};

export default class BulletHit extends Effect {
  constructor({centerX, centerY, factory, idx}) {
    super({
      centerX,
      centerY,
      width: 35,
      height: 31,
      animation,
      bgx: 0,
      bgy: 0,
      asset,
      factory: factory,
      idx,
    })
  }
}