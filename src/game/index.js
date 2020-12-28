import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from 'react-bootstrap/Container';
import Matter from 'matter-js';
import Person from './renderers/Person';
import Physics from './systems/Physics';
import Wall from './renderers/Wall';
import PlayerAnimation from './systems/PlayerAnimation';
 
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.container = React.createRef()
    this.state = {
      WIDTH: null,
      HEIGHT: null
    }
    this.entities = this.setupWorld();
  }

  setupWorld = () => {
    const engine = Matter.Engine.create({ enableSleeping: false });
    const world = engine.world;

    const person = Matter.Bodies.rectangle(200, 200, 40, 65);
    const floor = Matter.Bodies.rectangle(0, 780, 1200, 20, { isStatic: true })

    Matter.World.add(world, [
      person, floor
    ])

    return {
      physics: { engine: engine, world: world},
      person: { body: person, size: [40, 65], color: "red", renderer: Person, background: [-310, -28]},
      floor: { body: floor, size: [2400, 20], color: "green", renderer: Wall, }
    }
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
          systems={[Physics, PlayerAnimation]}
          entities={this.entities}
          />
    </Container>
  }
} 