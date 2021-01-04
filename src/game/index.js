import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from 'react-bootstrap/Container';
import Matter from 'matter-js';
import Person from './renderers/Person';
import Physics from './systems/Physics';
import Static from './renderers/Static';
import Level1 from './levels/level1';
 
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
    const person = Matter.Bodies.rectangle(200, 200, 40, 65, { mass: 100 });

    const entities = {
      physics: { engine: engine, world: world},
      person: { body: person, size: [40, 60], color: "red", renderer: Person, background: "idleright", direction: "right"},
    }

    Level1.forEach((step, idx) => {
      const { type, left, top, width, height } = step;
      const entity = {
        body: Matter.Bodies.rectangle(left, top, width, height, { isStatic: true, density: Infinity}),
        size: [width, height],
        type: type,
        renderer: Static
      }
      entities[`static${idx}`] = entity
    })

    Matter.World.add(world, Object.values(entities).filter(el => el.body).map(el => el.body))

    Matter.Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;
    })


    return entities
  }

  render() {

    return <Container 
      ref={this.container}
      style={{
        width: 1200,
        height: 800,
        background: "rgba(0, 0, 0, 0.3)",
        margin: "auto"
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