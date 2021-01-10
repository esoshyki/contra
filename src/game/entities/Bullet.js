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

const moveRight = () => {
  Matter.Body.translate()
}

class _Bullet {
  constructor({x, y, type, direction}) {
    this.left = x;
    this.top = y;
    this.size = [bullets[type].width, bullets[type].height];
    this.backgroundPosition = [bullets[type].bgx, bullets[type].bgy];
    this.direction = direction;
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.width, this.height, { speed: 10 });
    this.renderer = Bullet;
    this.speed = 10;
    this.animateIndex = 0;
    this.distance = 0;
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

  moveRight = () => {
    this.left += this.speed;
    Matter.Body.translate(this.body, { x: this.speed, y: 0});
  }

  moveLeft = () => {
    this.left -= this.speed;
    Matter.Body.translate(this.body, { x: -this.speed, y: 0})
  }

  moveUp = () => {
    this.top -= this.speed;
    Matter.Body.translate(this.body, { x: 0, y: -this.speed}); 
  }

  moveDown = () => {
    this.top += this.speed;
    Matter.Body.translate(this.body, { x: 0, y: this.speed});   
  }

  move = () => {
    if (this.animateIndex >= 0) {
      if (this.animateIndex <= 3) {
        this.animateIndex += 1;
      } else {
        this.animateIndex = 0;
        this.changeSlide()
      }
    }
    switch (this.direction) {
      case "right":
        this.moveRight();
        break;
      case "left":
        this.moveLeft();
        break;
      case "up":
        this.moveUp();
        break;
      case "down":
        this.moveDown();
        break;        
    };
    this.distance += this.speed;

  }
}

export default _Bullet;