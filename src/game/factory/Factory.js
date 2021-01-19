import level1 from './1lvl/level1';
import Matter from 'matter-js';
import Player from '../entities/Player/Player';
import Bird from '../entities/Enemies/Bird/Bird';
import Controls from '../entities/Controls';
import PlayerBullet from '../entities/guns/Bullet/PlayerBullet';
import GolemBullet from '../entities/guns/Bullet/StoneBullet';
import Golem from '../entities/Enemies/Golem/Golem';
import Bang from '../entities/Effects/Bang/Bang';
import removeFromArray from '../lib/removeFromArray';

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
    this.effects = [];
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
    this.level.setup(this);
    this.update();
  }

  addBodyToWrold = body => {
    Matter.World.addBody(this.game.world, body)
  };

  addPlayer = (left, top) => {
    const player = new Player({left: left, top: top, key: "player", factory: this});
    this.game.entities.player = player;
    this.player = player;
    this.addBodyToWrold(this.player.body);
  };

  /* Враги */
  addBird = (x, y) => {
    const bird = new Bird(x, y, this);
    const idx = this.enemies.length;
    bird.idx = idx;
    this.enemies.push(bird);
    this.game.entities["enemy" + idx] = bird;
    this.addBodyToWrold(bird.body);
  };

  addGolem = (x, y) => {
    const golem = new Golem(x, y, this);
    const idx = this.enemies.length;
    golem.idx = idx;
    this.enemies.push(golem);
    this.game.entities["enemy" + idx] = golem;
    this.addBodyToWrold(golem.body);
  };

  removeEnemy = idx => {
    const key = "enemy" + idx;
    this.enemies = removeFromArray(this.enemies, idx);
    delete this.game.entities[key];
  };

  removePlayer = () => {

  }

  removeUnit = unit => {
    unit.body && Matter.World.remove(this.game.entities.physics.world, unit.body);
    if (unit.type === "enemy") {
      this.removeEnemy(unit.idx);
    } else if (unit.type === "player") {
      this.removePlayer();
    }
  }

  /* Эффекты */
  addBang = ({left, top}) => {
    const idx = this.effects.length;
    const key = "effect" + idx;
    const bang = new Bang({
      left, top, factory: this, key, idx
    });
    this.effects.push(bang);
  };

  removeEffect = (idx) => {
    const key = "effect" + idx;
    this.effects = removeFromArray(this.effects, idx);
    delete this.game.entities[key];
  };

  moveBackgrounds = (sceneDistance) => {
    this.backgrounds.forEach(el => {
      const distance = sceneDistance * 5 / el.perspective;
      const left = el.left - distance;
      el.left = left;
    })
  };

  createPlayerBullet = (x, y, angle, speed, damage) => {
    const idx = this.bullets.length;
    const bullet = new PlayerBullet({ x, y, speed, angle, idx, factory: this, damage });
    this.bullets.push(bullet);
    this.game.entities["bullet" + idx] = bullet;
    this.addBodyToWrold(bullet.body);
  };

  createGolemBullet = (x, y, angle, speed, damage) => {
    const idx = this.bullets.length;
    const bullet = new GolemBullet({ x, y: y + 40, speed, angle, idx, factory: this, damage });
    this.bullets.push(bullet);
    this.game.entities["bullet" + idx] = bullet;
    this.addBodyToWrold(bullet.body);
  };

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