import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from 'react-bootstrap/Container';
import Matter from 'matter-js';
import Physics from './systems/Physics';
import Enemies from './systems/Enemy';
import Scene from './systems/Scene';
import BulletPhysics from './systems/Bullets';
import maingBG from '../assets/sprite-sheets/bg.jpg';
import { keyDown, keyUp, click } from './systems/Controls';
import Factory from './levels/Factory';

 
export default class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.world = null;
    this.engine = null;
    this.container = React.createRef();
    this.setupWorld();
  }

  setupLevel = () => {
    this.gameFactory.setupLevel(0, this.entities)
    window.addEventListener('keypress', (e) => e.preventDefault());
  };

  setupWorld = () => {

    this.gameFactory = new Factory(this);

    this.entities = this.gameFactory.setupWorld();

    this.gameFactory.setupLevel(0);

    this.entities.scene = {
      left: 0
    }
    
    setTimeout(() => {
      this.gameFactory.addPlayer();
      console.log(this.entities)
    }, 1000)
    
    const engine = this.entities.physics.engine;

    Matter.Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;
      pairs.forEach(contact => {
        if (contact.collision.normal.y === 1) {
          this.entities.player.isJumping = false
        }
      })
    });

    Matter.Events.on(engine, 'beforeUpdate', function () {
      this.entities && this.entities.forEach(el => {
        el.body.position.x = Math.round(el.body.position.x);
        el.body.position.y = Math.round(el.body.position.y);
      })
    });
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
            systems={[Scene, Enemies, keyDown, keyUp, BulletPhysics, Physics]}
            entities={this.entities}
            />
        </Container>
      </div>)
  }
} 