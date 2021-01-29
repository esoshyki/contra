import Enemy from '../Enemy';
import Matter from 'matter-js';
import animations from './Boss1.animations';
import background from './Boss.png';
import Renderer from './Boss1.renderer';

const colletcProps = (props, obj) => {
  Object.entries(obj).forEach(([key, val]) => {
    props[key] = val;
  })
};

const asset = `url(${background})`;

export default class Boss1 extends Enemy {
  constructor({
    left, top, factory, angle,
  }) {
    super({
      left, top,
      factory, world: factory.game.entities.world,
      width: 60, height: 65,
      defaultAnimation: animations.move,
      animations,
      angle,
      health: 200,
      speed: 3,
      matterProps: { density: Infinity, mass: 200, isStatic: true },
      asset,
      scale: 0.6
    });
    this.unit = "boss";
    this.weapon = null;
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
    this.asset = asset;
    this.renderer = Renderer;
  };

  drawFrame = (frame) => {

    colletcProps(this.bodyProps, frame.body);
    colletcProps(this.headProps, frame.head);
    
  };

  AI = (entities) => {

    
    this.animate();

  }

}