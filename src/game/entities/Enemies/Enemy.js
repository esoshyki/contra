import Matter from 'matter-js';
import Renderer from './Enemy.renderer';
import Unit from '../Unit';

class Enemy extends Unit {
  constructor(factory, size, asset, defaultIdle, scale) {
    super(size, defaultIdle, factory, -180)
    this.body = Matter.Bodies.rectangle(1200, 500, 60, 65, { mass: 100, density: 10 ** 10, });
    this.renderer = Renderer;
    this.asset = asset;
    this.scale = scale;
  };
};

export default Enemy;


