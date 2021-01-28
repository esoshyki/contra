import Enemy from '../Enemy';
import Matter from 'matter-js';
import animations from './Boss1.animations';
import background from './Boss.png';

const asset = `url(${background})`;

export default class Boss1 extends Enemy {
  constructor({
    left, top, factory, angle, idx,
  }) {
    super({
      left, top,
      factory, world: factory.game.entities.world,
      width: 60, height: 65,
      defaultAnimation: animations.idle,
      animations,
      angle,
      health: 200,
      speed: 3,
      matterProps: { density: Infinity, mass: 200, isStatic: true },
      asset,
      scale: 0.6
    });
    this.unit = "boss";
    this.weapon = null;
  };

  AI = (person) => {
    this.moveLeft();
    this.animate();
  }

}