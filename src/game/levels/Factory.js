import level1 from './level1';
import Static from '../renderers/Static';
import Matter from 'matter-js';
import Player from '../entities/Player/Player';
import Enemy1 from '../entities/Enemy1';
import Controls from '../entities/Controls';
import Background from '../renderers/Background';
import Bullet from '../entities/guns/Bullet/Bullet';

const levels = [
  level1,
]

export default class GameFactory {
  constructor(game) {
    this.game = game;
    this.level = null;
    this.statics = [];
    this.enemies = [];
    this.backgrounds = [];
    this.bullets = [];
    this.player = null;
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
      physics: { engine: engine, world: world },
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
        body: Matter.Bodies.rectangle(left, top, width, height, { isStatic: true, density: 10 ** 10 }),
        size: [width, height],
        type: "static",
        left: left,
        asset: asset,
        renderer: Static
      };
      this.statics.push(entity);
      this.game.entities[`static${idx}`] = entity;
      return entity;
    });

  };

  collectBackground = () => {
    const backgrounds = this.level.backgrounds;
    this.backgrounds = backgrounds.map((step, idx) => {
      const { left, top, width, height } = step;
      const entity = {
        body: Matter.Bodies.rectangle(left, top, width, height, { isStatic: true, isSensor: true }),
        type: "background",
        renderer: Background,
        ...step
      };
      this.game.entities[`bg${idx}`] = entity;
      this.backgrounds.push(entity);
      return entity
    });
  }

  addBodyToWrold = body => {
    Matter.World.addBody(this.game.world, body)
  }

  addPlayer = () => {
    const player = new Player(this);
    this.game.entities.player = player;
    this.player = player;
    this.addBodyToWrold(this.player.body);
  }

  addEnemy1 = () => {
    const enemy1 = new Enemy1(this);
    this.enemies.push(enemy1);
    this.game.entities.enemy1 = enemy1;
    this.addBodyToWrold(enemy1.body);
  }

  moveBackgrounds = (sceneDistance) => {
    this.backgrounds.forEach(el => {
      const distance = sceneDistance * 5 / el.perspective;
      const left = el.left - distance;
      el.left = left;
      Matter.Body.translate(el.body, { x: distance, y: 0 })
    })
  };

  createBullet = (x, y, angle, speed) => {
    const idx = this.bullets.length;
    const bullet = new Bullet(x, y, speed, angle, idx, this);
    this.bullets.push(bullet);
    this.game.entities["bullet" + idx] = bullet;
    this.addBodyToWrold(bullet.body);
  }

  deleteBullet = idx => {
    Matter.World.remove(this.world, this.bullets[idx].body);
    delete this.game.entities["bullet" + idx];
    this.bullets = this.bullets.slice(0, idx).concat(this.bullets.slice(idx + 1));
  }

  update = (left, right) => {
    const world = this.game.world;
    Object.entries(this.game.entities).forEach(([key, val]) => {
      val.body && Matter.World.addBody(world, val.body)
    })
  }
}