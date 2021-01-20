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
import defineUnit from '../lib/defineUnit';

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
    const idx = this.enemies.length;
    const bird = new Bird({left: x, top: y, factory: this, idx});
    this.enemies.push(bird);
    this.game.entities["enemy" + idx] = bird;
    this.addBodyToWrold(bird.body);
  };

  addGolem = (x, y) => {
    const idx = this.enemies.length;
    const golem = new Golem({left: x, top: y, factory: this, idx});
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
    const { idx, type } = unit;
    unit = defineUnit(unit);
    if (type === "enemy") {
      this.removeEnemy(idx);
    } else if (type === "player") {
      this.removePlayer();
    }
  }

  /* Эффекты */
  addBang = ({centerX, centerY}) => {
    const idx = this.effects.length;
    const key = "effect" + idx;
    const bang = new Bang({
      centerX, centerY, factory: this, key, idx
    });
    this.game.entities[key] = bang;
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

  /* Снаряды */
  createPlayerBullet = (x, y, angle, speed, damage) => {
    const idx = this.bullets.length;
    const key = "bullet" + idx;
    const bullet = new PlayerBullet({ x, y, speed, angle, idx, factory: this, damage  });
    this.bullets.push(bullet);
    this.game.entities[key] = bullet;
    this.addBodyToWrold(bullet.body);
  };

  createGolemBullet = (x, y, angle, speed, damage) => {
    const idx = this.bullets.length;
    const key = "bullet" + idx;
    const bullet = new GolemBullet({ x, y: y + 40, speed, angle, idx, factory: this, damage});
    this.bullets.push(bullet);
    this.game.entities[key] = bullet;
    this.addBodyToWrold(bullet.body);
  };

  deleteBullet = bullet => {
    bullet.body && Matter.World.remove(this.game.entities.physics.world, bullet.body);
    const { idx } = bullet;
    bullet = defineUnit(bullet);
    const key = "bullet" + idx;
    this.bullets = removeFromArray(this.bullets, idx);
    delete this.game.entities[key];
  }

  update = (left, right) => {
    const world = this.game.world;
    Object.entries(this.game.entities).forEach(([key, val]) => {
      val.body && Matter.World.addBody(world, val.body)
    })
  }
}