import Enemy from '../Enemy';
import animations from './Spider.animations';
import background from './Spider.png';

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
      health: 200,
      speed: 3,
      matterProps: { density: Infinity, mass: 200, isStatic: true },
      asset,
      scale: 0.8
    });
    this.unit = "spider";
    this.weapon = null;
    this.scenario = scenario;
  };

  AI = (entities) => {
    if (!this.scenario) {
      //this.moveLeft();
      this.moveDown();
      this.animate();
    } else {
      const { y, _ } = this.getCoordinates();
      const { from, to } = this.scenario;

      if (y - this.speed < from) {
        this.angle = 0;
        this.moveDown();
      };

      if (y + this.speed > to) {
        this.angle = -180;
        this.moveRight()
      }
    }

  }

}