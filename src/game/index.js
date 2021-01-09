import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from 'react-bootstrap/Container';
import Matter from 'matter-js';
import Physics from './systems/Physics';
import Enemies from './systems/Enemy';
import PlayerAnimation from './systems/Animations/player';
import Scene from './systems/Scene';
import Static from './renderers/Static';
import Backgorund from './renderers/Background';
import Level1 from './levels/level1';
import { lvl1background } from './levels/level1'
import maingBG from '../assets/sprite-sheets/bg.jpg';
import { keyDown, keyUp, click } from './systems/Controls';
import createPlayer from './entities/Player';
 
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
        body: Matter.Bodies.rectangle(left, top, width, height, { isStatic: true, density: 10 ** 10}),
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
    createPlayer({world: this.world, entities: entities});
  };

  setupWorld = () => {
    this.engine = Matter.Engine.create({ enableSleeping: false });
    this.world = this.engine.world;

    const entities = {
      physics: { engine: this.engine, world: this.world},
    }

    Matter.World.add(this.world, Object.values(entities).filter(el => el.body).map(el => el.body));

    Matter.Events.on(this.engine, "collisionStart", (event) => {
      const pairs = event.pairs;
      pairs.forEach(contact => {
        if (contact.collision.normal.y === 1) {
          this.entities.player.isJumping = false
        }
      })
    });

    Matter.Events.on(this.engine, 'beforeUpdate', function () {
      this.entities && this.entities.forEach(el => {
        el.body.position.x = Math.round(el.body.position.x);
        el.body.position.y = Math.round(el.body.position.y);
      })
  });

    this.setupStatic(entities);

    setTimeout(() => {
      this.setupPlayer(entities)
    }, 1000)

    return entities
  }

  render() {

    return (
      <div className="container" id="game-container" style={{
        background: `url(${maingBG})`,
        backgroundAttachment: "fixed",
        width: 1200,
        overflow: "hidden"
      }}>
        <Container 
        className={'game-scene'}
        ref={this.container}
        
        style={{
          position: "relative",
          overflow: "hidden",
          width: 2400,
          height: 800,
          margin: "auto",
          left: 0
          }}>
          <GameEngine 
            ref={ref => {this.gameEngine = ref; }}
            styles={{}}
            systems={[Scene, Enemies, keyDown, keyUp, PlayerAnimation, click, Physics]}
            entities={this.entities}
            />
        </Container>
      </div>)
  }
} 