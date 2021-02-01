import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from "react-bootstrap/Container";
import Physics from "./systems/Physics";
import Enemies from "./systems/Enemy";
import Scene from "./systems/Scene";
import BulletPhysics from "./systems/Bullets";
import Effects from "./systems/Effects";
import maingBG from "../assets/sprite-sheets/bg.jpg";
import { keyDown, keyUp, click } from "./systems/Controls";
import Factory from "./factory/Factory";
import Menu from "./menu/Menu";
import finishLevelSound from '../assets/audio/finishLevel.mp3';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.world = null;
    this.engine = null;
    this.menu = null;
    this.scene = React.createRef();
    this.state = {
      isStarted: false,
      showMenu: true,
      playerName: "",
      levelWidth: 0,
      levelHeight: 0,
      running: false,
      showStatistic: false,
      statistic: {
        shots: 0,
        hits: 0,
        time: Date.now(),
        show: false    
      }
    };
    this.factory = new Factory(this);
    this.entities = this.factory.setupWorld();
    this.entities.factory = this.factory;
    this.statistic = this.resetStatistic();
    this.audio = new Audio();

    window.addEventListener("click", (e) => e.preventDefault());
  };

  resetStatistic = () => {
    this.setState({
      ...this.state,
      statistic: {
        shots: 0,
        hits: 0,
        time: Date.now(),
        show: false    
      }
    })
  };

  addToStatistic = key => {
    this.setState({
      ...this.state,
      statistic: {
        ...this.state.statistic,
        [key] : this.state.statistic[key] + 1
      }
    })
  };

  completeLevel = () => {

    this.menu.stopMusic();

    this.audio.src = finishLevelSound;
    this.audio.play();

    this.gameEngine.stop();
    
    this.factory.level += 1;

    this.audio.onended = () => {

    this.factory.entities.scene.fixed = false;
    this.factory.entities.scene.fixedNotDone = true;
    this.factory.entities.sceneLeft =0;
    this.factory.entities.sceneTop = 0;
    this.scene.style.left = "0px";
    this.scene.style.top = "0px";
    this.factory.removeUnit(this.factory.entities.player);

      this.entities = this.factory.setupWorld();
      this.setState({
        ...this.state,
        showStatistic: true
      });

      setTimeout(() => {
        this.setState({
          ...this.state,
          showStatistic: false,
        });
        this.resetStatistic();
        this.factory.setupLevel(this.factory.level);
        this.menu.startGame();
      }, 6000);
    };
  };

  render() {
    return (
      <div
        className="container"
        id="game-container"
        style={{
          background: `url(${maingBG})`,
          backgroundAttachment: "fixed",
          width: 1200,
          height: 800,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {this.state.showStatistic && <div style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            fontSize: 25,
            color: "#fff",
            zIndex: 100
          }}>
              <h5>Level Complete</h5>
              Shots : {this.state.statistic.shots} <br />
              Hits : {this.state.statistic.hits} <br />
              Time : {(Date.now() - this.state.statistic.time) / 1000} seconds
            </div>}
        <Menu
          ref={(ref) => {
            this.menu = ref;
          }}
          game={this}
        />
        <Container
          className={"game-scene"}
          ref={(ref) => {this.scene = ref}}
          style={{
            position: "relative",
            overflow: "visible",
            width: this.entities.levelWidth,
            height: this.entities.levelHeight,
            margin: "auto",
            left: 0,
            top: 0,
            transition: "0.2s ease-out 0s",
          }}
        >

          <GameEngine
            running={false}
            ref={(ref) => {
              this.gameEngine = ref;
            }}
            styles={{}}
            systems={[
              Scene,
              Enemies,
              keyDown,
              keyUp,
              BulletPhysics,
              Physics,
              Effects,
            ]}
            entities={this.factory.entities}
          />
        </Container>
      </div>
    );
  }
}
