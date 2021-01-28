import Matter from 'matter-js';
import Unit from '../Unit';

class Enemy extends Unit {
  constructor({
    left, top, 
    width, height, 
    factory, world,
    defaultAnimation,
    animations,
    angle,
    health, speed,
    matterProps,
    asset, scale }) {
    super({
      left, top, width, height,
      factory, world,
      defaultAnimation,
      animations,
      angle,
      health, speed,
      matterProps,
      asset,
      scale
    });
    this.type = "enemy";
    this.healthbar = true;
  };

  runDieAnimation = () => {
    this.factory.addBang({centerX: this.body.position.x, centerY: this.body.position.y});
    this.factory.removeUnit(this);
  };

  hitReaction = () => {

  }

};

export default Enemy;


