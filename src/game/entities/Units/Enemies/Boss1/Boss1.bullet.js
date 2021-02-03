import Bullet from '../../Bullet/Bullet';
import png from './assets/rocket.png';
import categories from '../../../../constraints/colides';
import Matter from 'matter-js';
import sound from './sounds/Boss1.rocket.wav';
import Bang from '../../../Effects/Bang/Bang';

let count = 0;

const calcDamage = (playerPosition, bangPosition) => {
  const dx = playerPosition.x - bangPosition.x;
  const dy = playerPosition.y - bangPosition.y;
  const distance = Math.sqrt(dx ** 2 + dy ** 2);

  if (distance > 100) {
    return 0
  } else {
    return Math.floor(50 * (distance / 100));
  }
}

const asset = `url(${png})`;

const frames = [
  { w: 18, h:30, bgx: 0, bgy: 0, duration: 6},
];

const matterProps = {
  mass: 20,
  speed: 15,
  isSensor: true,
  collisionFilter: {
    category: categories.enemyBullet,
    mask: categories.player,
  }
}

export default class Rocket extends Bullet {
  constructor({ x, y, speed, angle, factory, damage, rads }) {
    super({
      x, y,
      speed,
      angle,
      factory,
      damage,
      asset,
      bgx: 0, bgy: 0,
      size: [18, 30],
      frames,
      matterProps,
    })
    this.started = false;
    this.rads = rads;
    this.audio = new Audio(sound);
    this.factory = factory;
    this.type = "bullet";
  };

  hitTarget = () => {
    console.log('hit target')
  };

  move = () => {

    const rads = this.rads;

    if (!this.started) {
      Matter.Body.applyForce(this.body, this.body.position, { x: -1 * Math.cos(rads), y: -1 * Math.sin(rads)})
      this.started = true;
      this.audio.play();
    } else {
      if (this.body.position.y > 1825) {
        const bang = new Bang({centerX : this.body.position.x, centerY: this.body.position.y, factory: this.factory});

        this.move = () => {

        };

        this.factory.addEntity(bang);
        const player = this.factory.entities.player;
        const damage = calcDamage(player.body.position, this.body.position);
        if (damage) {
          player.hit(damage);
        };
        this.factory.removeUnit(this);
      }
    };

  };
}