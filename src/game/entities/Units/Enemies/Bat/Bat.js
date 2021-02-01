import Enemy from '../Enemy';
import animations from './Bat.animations';
import background from './bat.png';

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
      matterProps: { density: Infinity, mass: 200, isStatic: true },
      asset,
      scale: 0.8
    });
    this.unit = "bat";
    this.weapon = null;
    this.scenario = scenario;
  };

  AI = (entities) => {
    if (!this.scenario) {
      this.moveLeft();
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