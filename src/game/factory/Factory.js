import level1 from './1lvl/level1';
import level2 from './2lvl/level2';
import Matter from 'matter-js';
import Player from '../entities/Units/Player/Player';
import Bird from '../entities/Units/Enemies/Bird/Bird';
import Spider from '../entities/Units/Enemies/Spider/Spider';
import Bat from '../entities/Units/Enemies/Bat/Bat';
import Controls from '../entities/Controls';
import PlayerBullet from '../entities/Units/Player/Player.bullet';
import GolemBullet from '../entities/Units/Enemies/Golem/Golem.bullet';
import Golem from '../entities/Units/Enemies/Golem/Golem';
import GolemBig from '../entities/Units/Enemies/GolemBig/GolemBig';
//import GolemBig from '../entities/Units/Enemies/GolemBig/GolemBig';
import defineUnit from '../lib/defineUnit';
import Effects from '../entities/Effects/Effect.creator';
import MatterJS from '../matter/';
import Boss1 from '../entities/Units/Enemies/Boss1/Boss1';
import Bar from '../entities/Bar/Bar';

const levels = [
  level1, level2
]

export { levels };

export default class GameFactory {
  constructor(game) {
    this.game = game;
    this.level = 1;
    this.world = null;
    this.engine = null;
    this.enitites = null;
    this.counts = null;
  }

  setupWorld = () => {
    if (this.level >= levels.length) {
      return this.game.finishGame();
    }

    this.counts = {
      static: 0,
      background: 0,
      enemy: 0,
      bullet: 0,
      effect: 0
    };
    this.engine = Matter.Engine.create({ enableSleeping: false });
    this.world = this.engine.world;
    this.game.world = this.world;
    this.entities = {
      factory: this,
      physics: {
        engine: this.engine,
        world: this.world,
      },
      controls: new Controls(),
      scene: {
        width: 2400,
        height: 800,
        left: 0,
        fixed: null,
        fixedNotDone: true
      },
    };
    this.setupLevel(this.level)

    const matterJS = new MatterJS(this);
    matterJS.setupWorld();

    return this.entities;
  }

  setupLevel = lvl => {
    const level = levels[lvl];
    const levelProps = level.setup(this);

    this.entities.scene.fixed = false;
    this.entities.scene.fixedNotDone = true;

    this.entities.levelWidth = levelProps.levelWidth;
    this.entities.levelHeight = levelProps.levelHeight;
    const { x, y } = levelProps.playerStart;
    this.entities.sceneLeft = x - 600;
    this.entities.sceneTop = y - 400;
    this.entities.startPosition = {x, y};
    this.addPlayer(x, y);
    this.entities = {...this.entities};
    this.game.gameEngine && this.game.gameEngine.swap(this.entities);
    this.game.gameEngine && this.game.gameEngine.stop();

  }

  addToBodies = body => {
    Matter.World.addBody(this.world, body)
  };

  addCount = type => {
    this.counts[type] += 1;
  }

  reduceCount = type => {
    this.counts[type] -= 1;
  };

  finishGame = () => {

  }

  addToEntities = entity => {
    const type = entity.type;
    const key = type === "player" ? type : type + this.counts[type];
    entity.key = key;
    this.addCount(type);
    entity.factory = this;
    this.entities[key] = entity;
  };

  removeAllEntites = () => {
    Object.values(this.entities).forEach(entity => {
      this.removeUnit(entity)
    });
  };

  removeFromBoides = body => {
    Matter.World.remove(this.world, body)
  };

  removeFromEntities = entity => {
    const type = entity.type;
    this.reduceCount(type);
    delete this.entities[entity.key]
  };

  addPlayer = (left, top) => {
    const player = new Player({ left: left, top: top, key: "player", factory: this });
    this.addToBodies(player.body);
    this.addToEntities(player);
  };

  /* Враги */
  addBird = (x, y) => {
    const bird = new Bird({ left: x, top: y, factory: this });
    this.addToBodies(bird.body);
    this.addToEntities(bird);
  };
  addBat = (x, y) => {
    const bat = new Bat({ left: x, top: y, factory: this });
    this.addToBodies(bat.body);
    this.addToEntities(bat);
  };

  addSpider = (x, y) => {
    const spider = new Spider({ left: x, top: y, factory: this });
    this.addToBodies(spider.body);
    this.addToEntities(spider);
  };

  addBoss1 = (x, y) => {
    const boss1 = new Boss1({ left: x, top: y, factory: this, angle: 180 });
    this.addToBodies(boss1.body);
    this.addToEntities(boss1);
    this.game.stopMusic();
  };

  addGolem = (x, y, scenario) => {
    const golem = new Golem({ left: x, top: y, factory: this, scenario });
    this.addToBodies(golem.body);
    this.addToEntities(golem);
  };
  addGolemBig = (x, y, scenario) => {
    const golemBig = new GolemBig({ left: x, top: y, factory: this, scenario });
    this.addToBodies(golemBig.body);
    this.addToEntities(golemBig);
  };

  addEntity = entity => {
    if (entity.body) {
      this.addToBodies(entity.body)
    };
    this.addToEntities(entity)
  };

  removeUnit = unit => {
    if (unit.body) {
      this.removeFromBoides(unit.body);
    };
    defineUnit(unit);
    this.removeFromEntities(unit);
  };

  /* Эффекты */
  addEffect = (getEffect, props) => {
    const effect = getEffect({ ...props });
    this.addToEntities(effect);
  };

  addBang = ({ centerX, centerY }) => {
    const props = { centerX, centerY, factory: this };
    this.addEffect(Effects.bang, props);
  };

  addBulletHit = ({ centerX, centerY }) => {
    const props = { centerX, centerY, factory: this }
    this.addEffect(Effects.bulletHit, props);
  };

  removeEffect = (effect) => {
    this.removeUnit(effect)
  };

  /* Снаряды */
  createPlayerBullet = (x, y, angle, speed, damage) => {
    const bullet = new PlayerBullet({ x, y, speed, angle, factory: this, damage });
    this.addToBodies(bullet.body);
    this.addToEntities(bullet);
  };


  createGolemBullet = (x, y, angle, speed, damage) => {
    const bullet = new GolemBullet({ x, y: y + 40, speed, angle, factory: this, damage });
    this.addToBodies(bullet.body);
    this.addToEntities(bullet);
  };

  deleteBullet = bullet => {
    this.removeUnit(bullet);
  };

  fixCamera = (left, top) => {
    this.entities.scene.fixed = {
      left, top
    };
  };
};