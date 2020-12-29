import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from 'react-bootstrap/Container';
import Matter from 'matter-js';
import Person from './renderers/Person';
import Physics from './systems/Physics';
import Wall from './renderers/Wall';
 
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
    const floor = Matter.Bodies.rectangle(0, 780, 2400, 40, { isStatic: true, mass: 1000 });
    const ceiling = Matter.Bodies.rectangle(0, 0, 2400, 40, { isStatic: true })
    const level1 = [[200, 700], [400, 300]];

    const boxes = level1.map(([left, top]) => Matter.Bodies.rectangle(left, top, 40, 40, { isStatic: true}))

    console.log(boxes)

    Matter.World.add(world, [
      person, floor, ceiling, ...boxes
    ])

    console.log(floor)

    const entities = {
      physics: { engine: engine, world: world},
      person: { body: person, size: [40, 65], color: "red", renderer: Person, background: "idleright"},
      floor: { body: floor, size: [2400, 20], color: "green", renderer: Wall, },
      ceiling: { body: ceiling, size: [2400, 20], color: "green", renderer: Wall},
      ...boxes.map(box => ({ body: box, size: [40, 40], color: "green", renderer: Wall}))
    }

    Matter.Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;
      console.log('pairs')
      console.log(pairs[0])
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