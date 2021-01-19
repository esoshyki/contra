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
    key, idx,
    matterProps,
    asset, scale }) {
    super({
      left, top, width, height,
      factory, world,
      defaultAnimation,
      animations,
      angle,
      health, speed,
      key, idx,
      matterProps,
      asset,
      scale
    })
  };

  runDieAnimation = () => {
    this.factory.addBang({left: this.body.position.x, top: this.body.position.y});
  }

};

export default Enemy;


