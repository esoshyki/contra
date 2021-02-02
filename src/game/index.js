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
import Finish from './components/finish';
import { levels } from "./factory/Factory";
import Statistics from './components/statistics';
import Bar from './components/bar';

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.world = null;
    this.engine = null;

    this.scene = React.createRef();
    this.state = {
      isStarted: false,
      showMenu: true,
      isMenu: true,
      playerName: "",
      levelWidth: 0,
      levelHeight: 0,
      running: false,
      showStatistic: false,
      gameFinish: false,
      isDead: false,
      lives: 3,
      health: 100,
      statistic: {
        shots: 0,
        hits: 0,
        time: Date.now(),
        kills: 0,
      }
    };
    this.factory = new Factory(this);
    this.entities = this.factory.setupWorld();
    this.entities.factory = this.factory;
    this.entities.volume = 1;
    this.statistic = this.resetStatistic();
    this.audio = new Audio();
    window.addEventListener("click", (e) => e.preventDefault());
  };

  gameOver = () => {
    console.log('game over')
    this.factory.removeAllEntites();
    this.setState({
      isDead: false,
      showMenu: true,
      health: 100,
      lives: 3,
      gameOver: true
      })
      this.restartGame()
  };

  reduceLives = () => {
    this.gameEngine.stop();
    this.setState({
      ...this.state,
      lives: this.state.lives - 1,
      isDead: true,
      showMenu: true,
    })
  }

  resetStatistic = () => {
    this.setState({
      ...this.state,
      statistic: {
        shots: 0,
        hits: 0,
        time: Date.now(),
        kills: 0,
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

  showDeadMenu = () => {
    this.stopMusic();
    this.setState({
      isDead: true
    });
  };

  restartRound = () => {

    this.setState({
      isDead: false,
      showMenu: false,
      health: 100
    });
    this.entities?.player && this.entities.player.setPosition(this.entities.startPosition);
    this.entities?.player && (this.entities.player.health = 100);
    this.startGame()
  };

  restartGame = () => {
    this.setState({
      isStarted: false,
      showMenu: true,
      playerName: "",
      levelWidth: 0,
      levelHeight: 0,
      running: false,
      showStatistic: false,
      gameFinish: false,
      isDead: false,
      gameOver: false,
      statistic: {
        shots: 0,
        hits: 0,
        time: Date.now(),
        kills: 0
      },
      pauseTime: 0,
      isPaused: false
    });
    this.factory.level = 0;
    this.factory.setupLevel(0);
  };

  finishGame = () => {
    this.setState({
      gameFinish: true
    })
    setTimeout(() => {
      this.restartGame()
    }, 60000)
  };

  pauseGame = () => {
    this.setState({
      pauseTime: Date.now(),
      showMenu: true,
      isPaused: true
    });
    this.stopMusic()
    this.gameEngine.stop()
  };

  resumeGame = () => {
    const time = Date.now() - this.state.pauseTime;
    this.setState({
      statistic: {
        ...this.state.statistic,
        time: this.state.statistic.time + time
      },
      pauseTime: 0,
      isPaused: false
    });
    this.playMusic();
    this.gameEngine.resumeGame();
  };

  restoreScene = () => {

    this.factory.entities.scene.fixed = false;
    this.factory.entities.scene.fixedNotDone = true;
    this.factory.entities.sceneLeft =0;
    this.factory.entities.sceneTop = 0;
    this.scene.style.left = "0px";
    this.scene.style.top = "0px";
  }

  completeLevel = () => {

    this.stopMusic();

    this.audio.src = finishLevelSound;
    this.audio.play();

    this.audio.onended = () => {

    this.restoreScene();

    this.factory.level += 1;

      if (this.factory.level < levels.length) {
        this.factory.removeAllEntites();
      };
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
        if (this.factory.level < levels.length) {
          this.factory.setupLevel(this.factory.level);
          this.restartRound()
          // this.menu && this.menu.startGame();
        } else {
          this.finishGame();
        }
      }, 6000);
    };
  };

  changeVolume = (volume) => {
    this.entities.volume = volume;
    this.setMenuVolume(volume);
  };

  setHealth = health => {
    this.setState({
      health: health
    })
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
        {!this.state.showMenu && <Bar game={this} />}
        {this.state.gameFinish && <Finish restartGame={this.restartGame}/>}
        {this.state.showStatistic && <Statistics 
          shots={this.state.statistic.shots}
          hits={this.state.statistic.hits}
          time={this.state.statistic.time}
          kills={this.state.statistic.kills}
          />}

        {this.state.showMenu && <Menu 
          game={this} 
          isDead={this.state.isDead} 
          resume={this.state.lives > 0 ? this.restartRound : this.gameOver}/>}

        {!this.state.gameFinish && !this.state.gameOver && <Container
          className={"game-scene"}
          ref={(ref) => {this.scene = ref}}
          style={{
            position: "relative",
            overflow: "visible",
            width: this.entities ? this.entities.levelWidth : 0,
            height: this.entities ? this.entities.levelHeight : 0,
            margin: "auto",
            left: 0,
            top: 0,
            transition: "0.2s ease-out 0s",
          }}
        >

          <GameEngine
            running={this.state.running}
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
        </Container>}
      </div>
    );
  }
}
