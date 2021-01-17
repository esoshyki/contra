import Enemy from '../Enemy';
import Matter from 'matter-js';
import {
  idle, moveAnimation, jump, fall, jumpAnimattion, runAndFireAnimation, idleFire
} from './Bird.animations';
import background from './Bird.png';

const asset = `url(${background})`;

export default class Bird extends Enemy {
  constructor(factory) {
    super(factory, [60, 65], asset, idle, 0.5);
    this.unit = "bird";
    this.distance = 0;
    console.log(this)
  };

  AI = (person) => {
    if (this.distance < 400) {
      this.moveLeft();
      this.distance += this.speed;
    }
    this.animate()
  }

  idleRight = () => {
    this.angle = 0;
    this.changeAnimation(idle);
  };

  idleLeft = () => {
    this.angle = -180;
    this.changeAnimation(idle);
  };

  moveRight = () => {
    this.angle = 0;
    Matter.Body.translate(this.body, { x: this.speed, y: 0 })
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveRightAndLookUp = () => {
    this.angle = 315;
    Matter.Body.translate(this.body, { x: this.speed, y: 0 })
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveRightAndLookDown = () => {
    this.angle = 45;
    Matter.Body.translate(this.body, { x: this.speed, y: 0 })
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveLeft = () => {
    this.angle = -180;
    Matter.Body.translate(this.body, { x: -this.speed, y: 0 })
    !this.isJumping && this.changeAnimation(idle);
  };

  moveLeftAndLookUp = () => {
    this.angle = -135;
    Matter.Body.translate(this.body, { x: -this.speed, y: 0 })
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  moveLeftAndLookDown = () => {
    this.angle = -225;
    Matter.Body.translate(this.body, { x: -this.speed, y: 0 })
    !this.isJumping && this.changeAnimation(moveAnimation);
  };

  rightlookUp = () => {
    this.angle = 270;
    this.changeAnimation(idle);
  };

  leftlookUp = () => {
    this.angle = -90;
    this.changeAnimation(idle);
  };

  rightlookDown = () => {
    this.angle = 90;
    this.changeAnimation(idle);
  };

  leftlookDown = () => {
    this.angle = -270;
    this.changeAnimation(idle);
  };

  jump = () => {
    !this.isJumping && this.changeAnimation(jumpAnimattion);
    if (!this.isJumping) {
      Matter.Body.applyForce(this.body, this.body.position, { x: 0, y: -5 })
      this.isJumping = true;
    }

  }

  fire = () => {
    if (!this.weapon.isReloaded) {
      this.weapon.shoot();
      this.changeAnimation(idleFire)
    };
  };

  hit = dmg => {
    this.health -= dmg;
    console.log('enemy hit!')
  }
}