import level1 from './level1';
import Static from '../renderers/Static';
import Matter from 'matter-js';

const levels = [
  level1,
]

export default class GameFactory {
  constructor(game) {
    this.level = null;
  }

  setupLevel = (lvl, entities) => {
    this.level = levels[lvl];
    this.collectStatic(0, 1200, entities);
  }

  collectStatic = (left, right, entities) => {
    const statics = this.level.statics.filter(el => el.left >= left && el.left < right);
    statics.forEach((step, idx) => {
      const { asset, left, top, width, height } = step;
      const entity = {
        body: Matter.Bodies.rectangle(left, top, width, height, { isStatic: true, density: 10 ** 10}),
        size: [width, height],
        type: "static",
        left: left,
        asset: asset,
        renderer: Static
      }
      Matter.World.add(entities.physics.world, entity.body);
      entities["static" + idx] = entity;
    });
  };
}