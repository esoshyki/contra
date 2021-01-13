import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from 'react-bootstrap/Container';
import Matter from 'matter-js'; // физический движок
import Person from './renderers/Person';
import Physics from './systems/Physics';
import Enemies from './systems/Enemy';
import PlayerAnimation from './systems/Animations/player';
import EnemyAnimation from './systems/Animations/enemy1';
import Scene from './systems/Scene';
import Static from './renderers/Static';
import Backgorund from './renderers/Background';
import Level1 from './levels/level1';
import { lvl1background } from './levels/level1'
import maingBG from '../assets/sprite-sheets/bg.jpg';
//import Enemy from './renderers/Enemy';
import Enemy1 from './renderers/Enemy1';
import { keyDown, keyUp, click } from './systems/Controls'

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.world = null;
    this.engine = null;
    this.container = React.createRef()
    this.entities = this.setupWorld();
  }

  setupStatic = (entities) => {
    Level1.forEach((step, idx) => {
      const { type, left, top, width, height } = step;
      const entity = {
        body: Matter.Bodies.rectangle(left, top, width, height, { isStatic: true, density: Infinity }),
        size: [width, height],
        type: type,
        renderer: Static
      }
      Matter.World.add(this.world, entity.body);
      entities[`static${idx}`] = entity
    });

    lvl1background.forEach((el, idx) => {
      const { asset, left, top, width, height, perspective } = el;
      const entity = {
        left, top, width, height, asset, perspective,
        renderer: Backgorund
      }
      entities[`background${idx}`] = entity;
    });


  };

  setupPlayer = (entities) => {
    const person = Matter.Bodies.rectangle(200, 600, 45, 45, { mass: 100, density: Infinity, });
    entities.person = {
      body: person,
      size: [45, 45],
      isJumping: false,
      color: "red",
      renderer: Person,
      backgroundX: -40,
      backgroundY: 0,
      direction: "right",
      moving: false,
      rotate: false
    };
    Matter.World.add(this.world, person);
  };

  setupWorld = () => {
    this.engine = Matter.Engine.create({ enableSleeping: false });
    this.world = this.engine.world;

    const entities = {
      physics: { engine: this.engine, world: this.world },
    }

    const enemy = this.addEnemy(entities, 600, 200)

    entities.enemy1 = enemy;

    Matter.World.add(this.world, Object.values(entities).filter(el => el.body).map(el => el.body));

    Matter.Events.on(this.engine, "collisionStart", (event) => {
      const pairs = event.pairs;
      pairs.forEach(contact => {
        if (contact.collision.normal.y === 1) {
          this.entities.person.isJumping = false
        }
      })
    });

    this.setupStatic(entities);

    setTimeout(() => {
      this.setupPlayer(entities)
    }, 1000)

    return entities
  }

  addEnemy(_entities, x, y) {
    const entities = _entities || this.entities;
    const newEnemy = {
      body: Matter.Bodies.rectangle(x, y, 45, 45, { mass: 0, density: Infinity, }),
      size: [200, 200],
      left: x,
      top: y,
      renderer: Enemy1,
      type: "enemy1"
    }
    // setupPlayer = (entities) => {
    //   const person = Matter.Bodies.rectangle(200, 600, 45, 45, { mass: 100, density: Infinity, });
    //   entities.person = {
    //     body: person,
    //     size: [45, 45],
    //     isJumping: false,
    //     color: "red",
    //     renderer: Person,
    //     backgroundX: -40,
    //     backgroundY: 0,
    //     direction: "right",
    //     moving: false,
    //     rotate: false
    //   };
    //   Matter.World.add(this.world, person);
    // };
    if (_entities) {
      return newEnemy
    } else {
      this.entities = {
        ...entities,
        newEnemy
      }
    }
  }

  render() {

    return (
      <div className="container" id="game-container" style={{
        background: `url(${maingBG})`,
        backgroundAttachment: "fixed",
      }}>
        <Container
          className={'game-scene'}
          ref={this.container}

          style={{
            position: "relative",
            overflow: "hidden",
            width: 1200,
            height: 800,
            margin: "auto",
            left: 0
          }}>
          <GameEngine
            ref={ref => { this.gameEngine = ref; }}
            styles={{}}
            systems={[Scene, Enemies, keyDown, keyUp, PlayerAnimation, EnemyAnimation, click, Physics]}
            entities={this.entities}
          />
        </Container>
      </div>)
  }
} 