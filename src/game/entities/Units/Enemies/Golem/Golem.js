import Enemy from '../Enemy';
import animations from './Golem.animations';
import background from './Golem.png';
import Matter from 'matter-js';
import Weapon from '../../../Weapon/Weapon';
import Bullet from './Golem.bullet';
import distanceProps from '../../../../lib/distanceProps';

const settings = {
  speed: 10,
  reload: 1500,
  damage: 15
};

const asset = `url(${background})`;

export default class Golem extends Enemy {
  constructor({
    left, top, factory, angle}) {
    super({left, top, 
      factory, world: factory.game.entities.world, 
      width: 90, height: 85, 
      defaultAnimation: animations.idle,
      animations,
      angle, 
      health: 200,
      speed: 3,
      matterProps: { density: Infinity, mass: 200 },
      asset,
    });
    this.unit = "golem";
    this.weapon = new Weapon(this);
    console.log(this.height);

  }

  shoot = () => {
    if (!this.reload) {
      this.reload = true;

      const { x , y } = this.getPosition();
      const { damage, speed, reload } = settings;

      setTimeout(() => {
        this.reload = false
      }, reload);

      const bullet = new Bullet({x, y, speed, damage, angle: -180, factory: this });
      this.factory.addEntity(bullet);
    };
  };

  AI = (entities) => {

    const { player } = entities;

    const playerPosition = player.getPosition();
    const golemPosition = this.getPosition();

    const { distance, angle } = distanceProps(playerPosition, golemPosition);

    if (distance < 200) {
      this.shoot();
    } else {
      // angle >= 0 ? this.moveLeft() : this.moveRight()
    };

    this.animate();
  };

}