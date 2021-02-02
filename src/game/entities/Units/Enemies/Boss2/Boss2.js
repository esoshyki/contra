import Enemy from '../Enemy';
import Matter from 'matter-js';
import animations from './animations/';
import png from './animations/Dragon.png';
import Renderer from './Boss2.renderer';
import categories from '../../../../constraints/colides';
import getDistanceProps from '../../../../lib/distanceProps';
import getRandom from '../../../../lib/getRandomFromArray';
import flySound from '../Boss1/sounds/Boss1.move.wav';
import dieSound from '../Boss1/sounds/Boss1.die.wav';


const asset = `url(${png})`;

export default class Boss1 extends Enemy {
  constructor({
    left, top, factory, angle,
  }) {
    super({
      left, top,
      factory, world: factory.game.entities.world,
      width: 171, height: 140,
      defaultAnimation: animations.fly,
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
    this.moveProps = null;
    this.angle = -180;
    this.drawFrame(this.defaultAnimation[0].slides[0]);
    this.possibleActions = [
      () => this.move({ x: 11300, y: 1360 - this.height / 2 }),
      () => this.move({ x: 11850, y: 1200 }),
      () => this.move({ x: 11750, y: 1550 }),
      () => this.attack(),
      () => this.attack(),
      () => this.attack()
    ]

    this.action = {
      started: true,
    };
    this.asset = asset;
    this.renderer = Renderer;
    this.attackStarted = false;
    this.fireStarted = false;
    this.audio = new Audio(flySound);
    this.restoreAnimation();
  };


  die = () => {
    this.runDieAnimation();
    this.factory.game.completeLevel();
    this.audio.src = dieSound;
    this.audio.play();
  };

  attack = () => {

    this.attackStarted = true;

    const player = this.factory.entities.player;

    const targetX = player.body.position.x;
    const targetY = player.body.position.y;

    const bosX = this.body.position.x;
    const bosY = this.body.position.y;

    const { distance, angle, rads } = getDistanceProps(this.body.position, {x: targetX, y: targetY});

    if (distance < 150) {

      this.attackStarted = false;
      this.speed = 3;
      this.fire()
      setTimeout(() => {
        const targetX = player.body.position.x;
        const targetY = player.body.position.y;
    
        const { distance } = getDistanceProps(this.body.position, {x: targetX, y: targetY});
        if (distance < 180) {
          player.hit(20);
        } 
      }, 200)
    } else {

      this.speed += 0.2;
      const kx = targetX - bosX > 0 ? 1 : -1;
      const ky = targetY - bosY > 0 ? 1 : -1;
      const x = this.body.position.x + this.speed * kx * Math.cos(rads);
      const y = this.body.position.y + this.speed * ky * Math.sin(rads);
      Matter.Body.setPosition(this.body, {x, y});
    }
  };

  fire = () => {
    this.fireStarted = true;

    setTimeout(() => {
      this.fireStarted = false;
    }, 2000)
  };

  think = () => {
    this.reactionActive = true;
    setTimeout(() => {
      this.reactionActive = false;
    }, this.reactionTime)
  }

 
  drawFrame = (frame) => {
    this.width = frame.width;
    this.height = frame.height;
    this.backgroundPositionX = frame.backgroundPositionX;
    this.backgroundPositionY = frame.backgroundPositionY;
  };

  move = (targetPosition) => {

    if (!this.moveProps) {
      this.changeAnimation(this.animations.fly);
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

  }

  startMove = (targetPosition) => {
    this.move(targetPosition)
  }

  AI = (entities) => {

    const { player } = entities;

    this.angle = player.body.position.x > this.body.position.x ? 0 : -180;
    const gravity = entities.physics.world.gravity;

    Matter.Body.applyForce(this.body, this.body.position, {
      x: -gravity.x * gravity.scale * this.body.mass,
      y: -gravity.y * gravity.scale * this.body.mass
  });

    if (entities.disableMoving) {

      this.animate(this.asset);
      return;
    };

    if (this.attackStarted) {
      this.changeAnimation(this.animations.fly);
      this.attack()
      this.animate(this.asset);
      return
    };

    if (this.fireStarted) {
      this.changeAnimation(this.animations.fire);
      this.animate(this.asset);
      return
    };

    if (this.moveProps) {
      this.move();
      this.animate(this.asset);
      return
    }

    if (this.reactionActive) {
      this.changeAnimation(this.animations.fly);
      this.animate(this.asset);
      return;
    } else {
      getRandom(this.possibleActions)();      
    }
  };

}