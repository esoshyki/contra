import Enemy from '../Enemy';
import Matter from 'matter-js';
import animations from './Bird.animations';
import background from './Bird.png';
import Bang from '../../Effects/Bang/Bang';

const asset = `url(${background})`;

export default class Bird extends Enemy {
  constructor({
    left, top, factory, angle, idx,
  }) {
    super({left, top, 
      factory, world: factory.game.entities.world, 
      width: 60, height: 65, 
      defaultAnimation: animations.idle,
      animations,
      angle, 
      health: 200,
      speed: 3,
      idx, key: "enemy" + idx,
      matterProps: { density: Infinity, mass: 200, isStatic: true },
      asset,
      scale: 0.6
    });
    this.unit = "bird";
    this.weapon = null;
  };

  AI = (person) => {
    this.moveLeft();
    this.animate();
  }

}