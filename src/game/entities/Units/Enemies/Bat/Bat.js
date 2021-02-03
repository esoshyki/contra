import Enemy from '../Enemy';
import animations from './Bat.animations';
import background from './bat.png';
import categories from '../../../../constraints/colides';

const asset = `url(${background})`;

export default class Bat extends Enemy {
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
      health: 200,
      speed: 3,
      matterProps: { mass: 200, isStatic: false, collisionFilter: {
        category: categories.enemy,
        mask: categories.static | categories.player | categories.bullet,
        group: categories.enemy,
      }},
      asset,
      scale: 0.8
    });
    this.angle = -180;
    this.unit = "bat";
    this.weapon = null;
    this.scenario = scenario;
  };

  AI = (entities) => {

    this.checkVisible(entities);

    this.noGravity();

    if (!this.scenario) {
      this.moveLeft();
      this.angle = 180;
      this.animate();
    } 
  }

}