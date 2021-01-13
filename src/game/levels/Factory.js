import level1 from './level1';
import Static from '../renderers/Static';
import Matter from 'matter-js';
import Player from '../entities/Player';
import Controls from '../entities/Controls';
import Background from '../renderers/Background';

const levels = [
  level1,
]

export default class GameFactory {
  constructor(game) {
    this.game = game;
    this.level = null;
    this.statics = [];
    this.nonPhysics = null;
    this.world = null;
    this.engine = null;
  }

  setupWorld = () => {
    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;
    this.game.engine = engine;
    this.game.world = world;

    const entities = {
      physics: { engine: engine, world: world},
      controls: new Controls(),
      gameFactory: this,
    };

    this.notStatic = {
      ...entities
    };

    return entities;

  }

  setupLevel = (lvl) => {
    this.level = levels[lvl];
    this.collectStatic();
    this.collectBackground();
    this.update();
  }

  collectStatic = () => {
    const statics = this.level.statics;

    this.statics = statics.map((step, idx) => {
      const { asset, left, top, width, height } = step;
      const entity = {
        body: Matter.Bodies.rectangle(left, top, width, height, { isStatic: true, density: 10 ** 10}),
        size: [width, height],
        type: "static",
        left: left,
        asset: asset,
        renderer: Static
      };
      this.game.entities[`static${idx}`] = entity;
      return entity;
    });

  };

  collectBackground = () => {
    const backgrounds = this.level.backgrounds;
    this.backgrounds = backgrounds.map((step, idx) => {
      const { asset, left, top, width, height, perspective } = step;
      const entity = {
        body: Matter.Bodies.rectangle(left, top, width, height, { isStatic: true, isSensor: true }),
        width: width, 
        height: height,
        type: "background",
        left: left,
        top: top,
        asset: asset,
        renderer: Background,
        perspective, perspective
      };
      this.game.entities[`bg${idx}`] = entity;
      return entity
    });
  }

  addPlayer = () => {
    const player = new Player(this.game.entities);
    const world = this.game.world;
    this.game.entities.player = player;
    Matter.World.addBody(world, player.body)
  }

  moveBackgrounds = (sceneDistance) => {
    this.backgrounds.forEach(el => {
      const distance = sceneDistance * 5 / el.perspective;
      const left = el.left - distance;
      el.left = left;
      Matter.Body.translate(el.body, {x: distance, y: 0})
    })
  }

 update = (left, right) => {

    const world = this.game.world;

    Object.entries(this.game.entities).forEach(([key, val]) => {
      val.body && Matter.World.addBody(world, val.body)
    })
  }
}