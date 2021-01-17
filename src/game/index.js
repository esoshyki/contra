import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from 'react-bootstrap/Container';
import Matter from 'matter-js';
import Physics from './systems/Physics';
import Enemies from './systems/Enemy';
import Scene from './systems/Scene';
import BulletPhysics from './systems/Bullets';
import maingBG from '../assets/sprite-sheets/bg1.jpg';
import { keyDown, keyUp, click } from './systems/Controls';
import Factory from './levels/Factory';


export default class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.world = null;
    this.engine = null;
    this.container = React.createRef();
    this.state = {
      showMenu: true
    };
    this.setupWorld();
    window.addEventListener('click', e => e.preventDefault())
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
      this.gameFactory.addEnemy1();
      console.log(this.entities)
    }, 1000)

    const engine = this.entities.physics.engine;

    console.log(engine)

    Matter.Events.on(engine, "collisionStart", (event) => {
      const pairs = event.pairs;
      // let bodA = pairs[0].bodyA;
      // let bodB = pairs[0].bodyB;
      //console.log(pairs[0])
      pairs.forEach(contact => {
        let bodA = pairs[0].bodyA;
        let bodB = pairs[0].bodyB;
        if (contact.collision.normal.y === 1) {
          this.entities.player.isJumping = false
        }
        if (bodA.label === 'player' && bodB.label === 'enemy') {
          this.entities.player.health = 0;
          console.log(this.entities.player.health)
          alert('GAME OVER')

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
    console.log(this.entities)
    return (
      <div className="container" id="game-container" style={{
        background: `url(${maingBG})`,
        backgroundAttachment: "fixed",
        width: 1200,
        overflow: "hidden"
      }}>
        {this.state.showMenu && (
          <div style={{
            position: "absolute",
            background: "rgba(0, 0, 0, 0.4)",
            width: 1200,
            height: 800,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <h5
              onMouseEnter={(e) => { console.log(e); e.target.style.color = "red"; e.target.style.cursor = "pointer" }}
              onMouseLeave={(e) => { e.target.style.color = "#fff"; e.target.style.cursor = "normal" }}
              onClick={() => {
                this.setState({
                  showMenu: false
                });
                console.log(this.showMenu)
              }}
              style={{
                fontSize: 25,
                color: "#fff",
                zIndex: 30
              }}
            >
              Start Game</h5>
          </div>)}
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
            ref={ref => { this.gameEngine = ref; }}
            styles={{}}
            systems={[Scene, Enemies, keyDown, keyUp, BulletPhysics, Physics]}
            entities={this.entities}
          />
        </Container>
      </div>)
  }
} 