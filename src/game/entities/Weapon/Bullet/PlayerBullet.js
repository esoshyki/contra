import Bullet from './Bullet';
import png from './Player.bullet.png';

const asset = `url(${png})`;

const frames = [
  { w: 16, h: 28, bgx: -246, bgy: -46, duration: 5 },
  { w: 24, h: 28, bgx: -266, bgy: -46, duration: 5 },
  { w: 28, h: 28, bgx: -298, bgy: -46, duration: 5 },
  { w: 28, h: 28, bgx: -329, bgy: -46, duration: 5 },
  { w: 28, h: 28, bgx: -361, bgy: -46, duration: 5 },
  { w: 28, h: 28, bgx: -396, bgy: -46, duration: 5 },
  { w: 28, h: 28, bgx: -432, bgy: -46, duration: 5 },
]

export default class PlayerBullet extends Bullet {
  constructor({x, y, speed, angle, idx, factory, damage }) {
    super({
      x, y, 
      speed, 
      angle, 
      idx,
      factory, 
      damage, 
      asset, 
      bgx: 10, bgy: -980, 
      size: [20, 20], 
      frames,
      })
      this.shooter = "player";
      this.noGravity = true;
  };

}