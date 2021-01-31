import level1 from './1lvl/level1';
import level2 from './2lvl/level2';
import Matter from 'matter-js';
import Player from '../entities/Units/Player/Player';
import Bird from '../entities/Units/Enemies/Bird/Bird';
import Controls from '../entities/Controls';
import PlayerBullet from '../entities/Units/Player/Player.bullet';
import GolemBullet from '../entities/Units/Enemies/Golem/Golem.bullet';
import Golem from '../entities/Units/Enemies/Golem/Golem';
import defineUnit from '../lib/defineUnit';
import Effects from '../entities/Effects/Effect.creator';
import MatterJS from '../matter/';
import Boss1 from '../entities/Units/Enemies/Boss1/Boss1';
import bossAppearSound from './sounds/Boss.appear.wav';

const levels = [
  level1, level2
]

export default class GameFactory {
  constructor(game) {
    this.game = game;
    this.level = 0;
    this.world = null;
    this.engine = null;
    this.enitites = null;
    this.counts = {
      static: 0,
      background: 0,
      enemy: 0,
      bullet: 0,
      effect: 0
    }
  }

  setupWorld = () => {
    this.engine = Matter.Engine.create({ enableSleeping: false });
    this.game.gameEngine = this.engine;
    this.world = this.engine.world;
    this.game.world = this.world;
    this.entities = {
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
      }
    };
    this.setupLevel(0)

    const matterJS = new MatterJS(this);
    matterJS.setupWorld();

    return this.entities;
  }

  setupLevel = lvl => {
    const level = levels[lvl]; // this.level
    const levelProps = level.setup(this);

    this.entities.levelWidth = levelProps.levelWidth;
    this.entities.levelHeight = levelProps.levelHeight;
    this.game.playerStart = levelProps.playerStart;
    this.entities.sceneLeft = 0;
    this.entities.sceneTop = 0;
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

  completeLevel = () => {
    if (this.level === levels.length - 1) {
      this.finishGame()
    } else {
      this.level += 1;
      this.game.menu.completeLevel();
      setTimeout(() => {
        this.setupWorld();
      }, 5000);
    }
  };

  finishGame = () => {

  }

  addToEntities = entity => {
    const type = entity.type;
    const key = type === "player" ? type : type + this.counts[type];
    entity.key = key;
    this.addCount(type);
    this.entities[key] = entity;
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

  addBoss1 = (x, y) => {
    const boss1 = new Boss1({ left: x, top: y, factory: this, angle: 180 });
    this.addToBodies(boss1.body);
    this.addToEntities(boss1);
    this.game.menu.music.pause();
    const bossAppear = new Audio(bossAppearSound);
    bossAppear.onended = () => {
      this.game.menu.music.play();
      bossAppear.remove();
    }
    bossAppear.play();
  };

  addGolem = (x, y, scenario) => {
    const golem = new Golem({ left: x, top: y, factory: this, scenario });
    this.addToBodies(golem.body);
    this.addToEntities(golem);
  };

  addEntity = entity => {
    if (entity.body) {
      this.addToBodies(entity.body)
    };
    this.addToEntities(entity)
  }

  removeUnit = unit => {
    if (unit.body) {
      this.removeFromBoides(unit.body);
    };
    defineUnit(unit);
    this.removeFromEntities(unit);
  }

  /* Эффекты */
  addEffect = (getEffect, props) => {
    const effect = getEffect({ ...props });
    this.addToEntities(effect);
  };

  addBang = ({ centerX, centerY }) => {
    console.log("bang")
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