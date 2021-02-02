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
      health: 200,
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

    this.noGravity();

    if (!this.scenario) {
      this.angle < 0 ? this.moveLeft() : this.moveRight();
      this.animate();
    } else {
      const { x, _ } = this.getCoordinates();
      const { from, to } = this.scenario;

      if (x - this.speed < from) {
        this.angle = 0;
        this.moveLeft();
      };

      if (x + this.speed > to) {
        this.angle = -180;
        this.moveRight()
      }
    }

  }

}