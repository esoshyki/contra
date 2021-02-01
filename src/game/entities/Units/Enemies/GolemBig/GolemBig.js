import Enemy from '../Enemy';
import animations from './GolemBig.animations';
import background from './GolemBig.png';
import Matter from 'matter-js';
import Bullet from './GolemBig.bullet';
import distanceProps from '../../../../lib/distanceProps';
import categories from '../../../../constraints/colides';

const settings = {
  speed: 3,
  reload: 1500,
  damage: 15
};

const asset = `url(${background})`;

export default class GolemBig extends Enemy {
  constructor({
    left, top, factory, angle, scenario }) {
    super({
      left, top,
      factory, world: factory.game.entities.world,
      width: 90, height: 85,
      defaultAnimation: animations.move,
      animations,
      angle,
      health: 200,
      speed: settings.speed,
      matterProps: {
        density: Infinity,
        mass: 200,
        collisionFilter: {
          category: categories.enemy,
          mask: categories.static | categories.player | categories.bullet,
          group: categories.enemy,
        }
      },
      asset,
    });
    this.unit = "golemBig";
    this.scenario = scenario;
  }

  fire = () => {
    const { x, y } = this.getPosition();
    const { damage, speed, reload } = settings;
    this.reload = true;

    setTimeout(() => {
      this.reload = false
    }, reload);

    const bullet = new Bullet({ x, y, speed, damage, angle: 45, factory: this });
    this.factory.addEntity(bullet);
  }

  shoot = () => {
    if (!this.reload) {
      this.changeAnimation(animations.cast, this.fire.bind(this))
    };
  };

  AI = (entities) => {

    const { player } = entities;

    const playerPosition = player.getPosition();
    const golemPosition = this.getPosition();

    const { distance, angle } = distanceProps(playerPosition, golemPosition);

    if (distance < 400) {

      this.angle = playerPosition.x < golemPosition.x ? -180 : 0;
      this.shoot();
    } else {

      if (this.scenario) {

        const { from, to } = this.scenario;

        const { x, y } = this.getCoordinates();

        if (this.angle < 0) {

          if (x - this.speed < from) {
            this.angle = 0;
          } else {
            this.moveLeft()
          }
        } else {

          if (x + this.speed > to) {
            this.angle = -180;
          } else {
            this.moveRight()
          }
        };
      } else {
        this.moveLeft()
      }


    };

    this.animate();
  };

}