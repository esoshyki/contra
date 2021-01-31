import Enemy from '../Enemy';
import Matter from 'matter-js';
import animations from './Boss1.animations';
import background from './Boss.png';
import Renderer from './Boss1.renderer';
import categories from '../../../../constraints/colides';
import getDistanceProps from '../../../../lib/distanceProps';
import getRandom from '../../../../lib/getRandomFromArray';
import Rocket from './Boss1.bullet';
import flySound from './sounds/Boss1.move.wav';
import dieSound from './sounds/Boss1.die.wav';

const asset = `url(${background})`;

export default class Boss1 extends Enemy {
  constructor({
    left, top, factory, angle,
  }) {
    super({
      left, top,
      factory, world: factory.game.entities.world,
      width: 171, height: 140,
      defaultAnimation: animations.move,
      animations,
      angle,
      health: 500,
      speed: 3,
      matterProps: { density: Infinity, mass: 200, 
        collisionFilter: {
          category: categories.enemy,
          mask: categories.player | categories.bullet | categories.static,
          group: categories.enemy,
        }
      },
      asset,
    });
    this.body.unit = this;
    this.unit = "boss";
    this.weapon = null;
    this.reactionTime = 2000;
    this.reactionActive = false;
    this.bodyProps = {
      width: 171,
      height: 140,
      backgroundPositionX: -50,
      backgroundPositionY: -461
    };
    this.headProps = {
      width: 83,
      height: 51,
      backgroundPositionX: -190,
      backgroundPositionY: -651,
      top: 33,
      left: 24,
    };
    this.moveProps = null;
    this.possibleActions = [
      () => this.move({ x: 11300, y: 1360 - this.bodyProps.height / 2 }),
      () => this.move({ x: 11850, y: 1200 }),
      () => this.move({ x: 11750, y: 1550 }),
      () => this.shoot(),
      () => this.shoot(),
      () => this.shoot()
    ]

    this.action = {
      started: true,
    }
    this.asset = asset;
    this.renderer = Renderer;
    this.shootStarted = false;
    this.audio = new Audio(flySound);
  };

  drawFrame = (frame) => {

    this.bodyProps = {
      ...frame.body
    };

    this.headProps = {
      ...frame.head
    }
   
  };

  die = () => {
    this.runDieAnimation();
    this.factory.game.menu.stopMusic();
    this.audio.src = dieSound;
    this.audio.play();
    this.factory.completeLevel();
  }

  shoot = () => {

      let count = 0;
      let interval;
  
      const addRocket = () => {
        const rads = 0.5 + 2.1 * Math.random();
        const rocket = new Rocket({
          x: this.body.position.x, y: this.body.position.y,
          speed: 5,
          factory: this.factory,
          rads
        });
        this.factory.addEntity(rocket);
        count += 1;
        if (count > 5) {
          clearInterval(interval);
        };
      };
  
      interval = setInterval(addRocket, 200);
      this.shootStarted = true;
      setTimeout(() => {
        this.shootStarted = false;
        this.think()
      }, this.reactionTime)

  }

  think = () => {
    this.reactionActive = true;
    setTimeout(() => {
      this.reactionActive = false;
    }, this.reactionTime)
  }

  move = (targetPosition) => {

    this.body.isStatic = true;
    if (!this.moveProps) {
      this.changeAnimation(this.animations.move);
      this.audio.play();

      const { distance, angle, rads } = getDistanceProps(this.body.position, targetPosition);

      this.angle = -angle;

      this.moveProps = {
        targetPosition,
        distance,
        rads,
        speed: 2
      };
    };

    const bosX = this.body.position.x;
    const bosY = this.body.position.y;

    const targetX = this.moveProps.targetPosition.x;
    const targetY = this.moveProps.targetPosition.y;

    if (Math.abs(bosX - targetX) <= 10 && 
        Math.abs(bosY - targetY) <= 10 ) {
          Matter.Body.setPosition(this.body, this.moveProps.targetPosition);
          this.moveProps = null;
          this.audio.pause();
          this.audio.currentTime = 0;
          this.body.isStatic = false;
          return this.think();
    } else {
      const { speed, rads } = this.moveProps;
      const kx = targetX - bosX > 0 ? 1 : -1;
      const ky = targetY - bosY > 0 ? 1 : -1;
      const x = this.body.position.x + speed * kx * Math.cos(rads);
      const y = this.body.position.y + speed * ky * Math.sin(rads);
      Matter.Body.setPosition(this.body, {x, y});
      this.moveProps.speed += 0.2;
    };
  };

  AI = (entities) => {

    const { player } = entities;

    this.angle = player.body.position.x > this.body.position.x ? -180 : 0

    if (entities.disableMoving) {
      this.animate();
      return;
    };

    if (this.shootStarted) {
      this.animate();
      return
    };

    if (this.moveProps) {
      this.move();
      this.animate();
      return
    }

    if (this.reactionActive) {
      this.idle();
      this.animate();
      return;
    } else {
      getRandom(this.possibleActions)();      
    }
  }

}