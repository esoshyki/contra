import Bullet from './Bullet';
import png from '../../../../assets/sprite-sheets/player/player.png';

const asset = `url(${png})`;

export default class PlayerBullet extends Bullet {
  constructor({x, y, speed, angle, idx, factory, damage}) {
    super({x, y, speed, angle, idx, factory, damage, asset, bgx: 10, bgy: -980})
  }
}