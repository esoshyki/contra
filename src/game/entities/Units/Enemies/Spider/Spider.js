import Enemy from '../Enemy';
import animations from './Spider.animations';
import background from './Spider.png';
import categories from '../../../../constraints/colides';

const asset = `url(${background})`;

export default class Spider extends Enemy {
  constructor({
    left, top, factory, angle, scenario,
  }) {
    super({
      left, top,
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
      scale: 0.8
    });
    this.unit = "spider";
    this.weapon = null;
    this.scenario = scenario;
  };

  AI = (entities) => {

    this.noGravity();
    this.checkVisible(entities);

    if (!this.scenario) {
      this.moveDown();
      this.animate();
    }

  }

}