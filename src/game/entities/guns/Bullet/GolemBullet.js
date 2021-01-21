import Bullet from './Bullet';
import png from '../../Enemies/Golem/Golem.png';

const asset = `url(${png})`;

export default class PlayerBullet extends Bullet {
  constructor({ x, y, speed, angle, idx, factory, damage  }) {
    super({ x, y, speed, angle, idx, factory, damage, asset, bgx: -58, bgy: -283 })
    this.size = [51, 51];
  }

  changeSlide = () => {
    const [bgx, _] = this.backgroundPosition;

    if (bgx === -10) {
      this.backgroundPosition[0] = -40;
      //this.backgroundPosition = [-137, -283];
      return;
    }
    if (bgx === -40) {
      this.backgroundPosition[0] = -80;
      return
    }
    if (bgx === -80) {
      this.backgroundPosition[0] = -120;
      return
    }
    if (bgx === -120) {
      this.backgroundPosition[0] = -160;
      return
    }
    if (bgx === -160) {
      this.backgroundPosition[0] = -200;
      return
    }
    if (bgx === -200) {
      this.backgroundPosition[0] = -240;
      return
    }
    if (bgx === -240) {
      this.backgroundPosition[0] = -280;
      return
    }
    if (bgx === -280) {
      this.backgroundPosition[0] = -320;
      return
    }
  }
}