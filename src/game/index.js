import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from 'react-bootstrap/Container';
import Physics from './systems/Physics';
import Enemies from './systems/Enemy';
import Scene from './systems/Scene';
import BulletPhysics from './systems/Bullets';
import maingBG from '../assets/sprite-sheets/bg.jpg';
import { keyDown, keyUp, click } from './systems/Controls';
import Factory from './factory/Factory';
import MatterJS from './matter/';


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
    this.gameFactory.setupLevel(0, this.entities);
    window.addEventListener('keypress', (e) => e.preventDefault());
  };

  setupWorld = () => {

    this.gameFactory = new Factory(this);

    this.entities = this.gameFactory.setupWorld();

    this.gameFactory.setupLevel(0);

    this.entities.scene = {
      left: 0,
      top: 800
    };

    this.matterJS = new MatterJS(this);
    this.matterJS.setupWorld();

    setTimeout(() => {
      this.gameFactory.addPlayer();
    }, 1000)
  }

  render() {
    return (
      <div className="container" id="game-container" style={{
        background: `url(${maingBG})`,
        backgroundAttachment: "fixed",
        width: 1200,
        height: 800,
        overflow: "hidden",
        position: "relative"
      }}>
        {this.state.showMenu && (
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            background: "rgba(0, 0, 0, 0.4)",
            width: 1200,
            height: 800,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <h5
              onMouseEnter={(e) => { e.target.style.color = "red"; e.target.style.cursor = "pointer" }}
              onMouseLeave={(e) => { e.target.style.color = "#fff"; e.target.style.cursor = "normal" }}
              onClick={() => {
                this.setState({
                  showMenu: false
                });
              }}
              style={{
                fontSize: 25,
                color: "#fff",
                zIndex: 30
              }}
            >
              Start Game</h5>
          </div>)}
        {!this.state.showMenu && <Container
          className={'game-scene'}
          ref={this.container}

          style={{
            position: "relative",
            overflow: "hidden",
            width: 2400,
            height: 800,
            margin: "auto",
            left: 0,
            top: 0,
            transition: '0.2s ease-out 0s'
          }}>
          <GameEngine
            ref={ref => { this.gameEngine = ref; }}
            styles={{}}
            systems={[Scene, Enemies, keyDown, keyUp, BulletPhysics, Physics]}
            entities={this.entities}
          />
        </Container>}
      </div>)
  }
} 