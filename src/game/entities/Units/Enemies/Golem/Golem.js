import Enemy from '../Enemy';
import animations from './Golem.animations';
import background from './Golem.png';
import Matter from 'matter-js';
import Weapon from '../../../Weapon/Weapon';
import Bang from '../../../Effects/Bang/Bang';

const asset = `url(${background})`;

export default class Golem extends Enemy {
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
      matterProps: { density: Infinity, mass: 200 },
      asset,
      scale: 0.6
    });
    this.unit = "golem";
    this.weapon = new Weapon(this);
  }

  AI = (person) => {
    if (Math.abs(person.body.position.x - this.body.position.x) < 200) {
      this.fire()
    } else {
      this.moveLeft()
    }
    this.animate();
  };

}