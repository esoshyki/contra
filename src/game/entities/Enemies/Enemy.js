import Matter from 'matter-js';
import Renderer from './Enemy.renderer';
import Unit from '../Unit';

class Enemy extends Unit {
  constructor({x, y, factory, size, asset, defaultIdle, scale}) {
    super(size, defaultIdle, factory, -180)
    this.body = Matter.Bodies.rectangle(x, y, size[0], size[1], { mass: 100, density: 10 ** 10, });
    this.renderer = Renderer;
    this.asset = asset;
    this.scale = scale;
    this.effect = null;
  };

  remove = () => {
    this.weapon = null;
    console.log(this.idx);
    delete this.factory.game.entities["enemy" + this.idx];
  }
};

export default Enemy;


