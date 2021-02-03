import Enemy from '../Enemy';
import animations from './Bird.animations';
import background from './Bird.png';
import categories from '../../../../constraints/colides';

const asset = `url(${background})`;

export default class Bird extends Enemy {
  constructor({
    left, top, factory, angle, scenario,
  }) {
    super({left, top, 
      factory, world: factory.game.entities.world, 
      width: 60, height: 65, 
      defaultAnimation: animations.idle,
      animations,
      angle, 
      health: 80,
      speed: 3,
      matterProps: { mass: 200, isStatic: false, collisionFilter: {
        category: categories.enemy,
        mask: categories.static | categories.player | categories.bullet,
        group: categories.enemy,
      }},
      asset,
      scale: 0.6
    });
    this.unit = "bird";
    this.weapon = null;
    this.scenario = scenario;
  };

  AI = (entities) => {

    this.checkVisible(entities);
    this.noGravity();

    if (!this.scenario) {
      this.angle < 0 ? this.moveLeft() : this.moveRight();
      this.animate();
    };
  }

}