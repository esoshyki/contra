import Matter from 'matter-js';
import Bullet from '../renderers/Bullet';

const bullets = [
  {
    width: 24,
    height: 16,
    bgx: -10,
    bgy: -980,
  }
]

class _Bullet {
  constructor({x, y, type, angle, transform}) {
    this.left = x;
    this.top = y;
    this.size = [bullets[type].width, bullets[type].height];
    this.backgroundPosition = [bullets[type].bgx, bullets[type].bgy];
    this.angle = angle;
    this.body = Matter.Bodies.rectangle(this.left, this.top, this.size[0], this.size[1], { speed: 10 });
    this.renderer = Bullet;
    this.speed = 10;
    this.animateIndex = 0;
    this.distance = 0;
    this.transform = transform;
  }

  changeSlide = () => {
    const [bgx, _] = this.backgroundPosition;
    if (bgx === -10) {
      this.backgroundPosition[0] = -40;
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

  move = () => {
    const PI = 3.1416;
    const rad = (this.angle * PI) / 180;

    const vector = {x: this.speed * Math.cos(rad), y: this.speed * Math.sin(rad)};
    Matter.Body.translate(this.body, vector)
    this.distance += this.speed;
  }
}

export default _Bullet;