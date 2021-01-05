import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from 'react-bootstrap/Container';
import Matter from 'matter-js';
import Person from './renderers/Person';
import Physics from './systems/Physics';
import Static from './renderers/Static';
import Backgorund from './renderers/Background';
import Level1 from './levels/level1';
import lvl1background from './levels/level1'
import maingBG from '../assets/sprite-sheets/bg.jpg';
 
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.container = React.createRef()
    this.entities = this.setupWorld();
  }

  setupWorld = () => {
    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;
    const person = Matter.Bodies.rectangle(400, 200, 40, 65, { mass: 70, density: Infinity, });

    const entities = {
      physics: { engine: engine, world: world},
      person: { body: person, size: [40, 60], isJumping: true, color: "red", renderer: Person, background: "idleright", direction: "right"},
    }

    Level1.forEach((step, idx) => {
      const { type, left, top, width, height, perspective } = step;
      const entity = {
        body: Matter.Bodies.rectangle(left, top, width, height, { isStatic: perspective ? false : true, density: perspective ? 0 : Infinity}),
        size: [width, height],
        type: type,
        renderer: perspective ? Backgorund : Static
      }
      entities[`static${idx}`] = entity
    })

    Matter.World.add(world, Object.values(entities).filter(el => el.body).map(el => el.body))

    Matter.Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;

      pairs.forEach(contact => {
        if (contact.collision.normal.y === -1) {
          this.entities.person.isJumping = false
        }
      })
    })


    return entities
  }

  render() {

    return <Container 
      ref={this.container}
      
      style={{
        width: 1200,
        height: 800,
        background: `url(${maingBG})`,
        backgroundAttachment: "fixed",
        margin: "auto",
        left: 0
        }}>
        <GameEngine 
          ref={ref => {this.gameEngine = ref; }}
          styles={{}}
          systems={[Physics]}
          entities={this.entities}
          />
    </Container>
  }
} 