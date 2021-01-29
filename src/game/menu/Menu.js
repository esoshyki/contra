import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Menu.module.css";
import contraLogo from "./../../assets/sprite-sheets/MegamenLogo.png";
import MenuControls from "./Controls/MenuControls";
import MenuSettings from "./Settings/MenuSettings";
import DeadMenu from "./Dead/DeadMenu";
import stage1 from "./../../assets/audio/Stage1.mp3";
import pauseMusic from "./../../assets/audio/Pause.mp3";
import gameOverMusic from "./../../assets/audio/GameOver.mp3";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.menu = React.createRef();
    this.input = React.createRef();

    this.state = {
      isControlsActive: false,
      isSettingsActive: false,
      isDead: false,
      isStarted: false,
      volume: 0.1,
    };

    this.music = {
      stage1music: new Audio(stage1),
      gameOverMusic: new Audio(gameOverMusic),
      pauseMusic: new Audio(pauseMusic),
    };

    this.entity = null;
  }

  init = () => {
    window.addEventListener("keyup", this.escapeListner);
  };

  escapeListner = (e) => {
    if (e.key === "Escape") {
      if (!this.props.game.state.showMenu) {
        this.pauseClickHandler();
      } else {
        this.resumeClickHandler();
        this.setState({
          isControlsActive: false,
          isSettingsActive: false,
        });
      }
    }
    if (e.key === "Space") {
      this.dead();
    }
  };

  dead = () => {
    setTimeout(() => {
      this.music.gameOverMusic.play();
    }, 500);
    this.setState({
      isDead: true,
    });
    this.pauseClickHandler();
    window.removeEventListener("keyup", this.escapeListner, false);
  };

  changeVolume = (elementvolume) => {
    for (const [key, value] of Object.entries(this.music)) {
      value.volume = elementvolume;
    }
    this.setState({ volume: elementvolume });
  };

  menuControlsHandler = () => {
    if (this.state.isControlsActive) {
      this.setState({
        isControlsActive: false,
      });
    } else {
      this.setState({
        isControlsActive: true,
      });
    }
  };

  menuSettingsHandler = () => {
    if (this.state.isSettingsActive) {
      this.setState({
        isSettingsActive: false,
      });
    } else {
      this.setState({
        isSettingsActive: true,
      });
    }
  };

  pauseClickHandler = () => {
    this.props.game.gameEngine.stop();
    this.menu.current.classList.remove("hidden");
    this.props.game.setState({
      isStarted: true,
      showMenu: true,
    });
    this.music.stage1music.pause();

    if (!this.state.isDead) {
      this.music.pauseMusic.play();
    }
  };
  resumeClickHandler = () => {
    this.props.game.gameEngine.start();

    this.props.game.setState({
      showMenu: false,
    });
    this.menu.current.classList.add("hidden");
    this.render();
    this.music.stage1music.play();
  };

  restartClickHandler = () => {};

  saveClickHandler = () => {};

  loadClickHandler = () => {};

  startGame = () => {
    let name = this.input.current.value;
    this.props.game.setState({
      playerName: name,
      showMenu: true,
    });
    this.changeVolume(0.1);
    this.music.stage1music.play();
    const { x, y } = this.props.game.playerStart;
    this.props.game.factory.addPlayer(x, y);
    this.resumeClickHandler();
    this.init();
  };

  render() {
    return (
      <div ref={this.menu} className={styles.menu}>
        {this.state.isControlsActive && (
          <MenuControls callback={this.menuControlsHandler} />
        )}

        {this.state.isSettingsActive && (
          <MenuSettings
            callback={this.menuSettingsHandler}
            changeVolume={this.changeVolume}
            volume={this.state.volume}
          />
        )}
        {this.state.isDead && <DeadMenu callback={this.restartClickHandler} />}

        {!this.props.game.state.isStarted && (
          <div>
            <form className={styles.start}>
              <img
                className={styles.logo}
                src={contraLogo}
                alt="Contra-logo"
              ></img>
              <input
                className={styles.textinput}
                ref={this.input}
                placeholder="Enter Your Name"
              ></input>
              <button className={styles.gameButton} onClick={this.startGame}>
                Start Game
              </button>
              <button
                className={styles.gameButton}
                onClick={this.menuControlsHandler}
              >
                Controls
              </button>
              <button
                className={styles.gameButton}
                onClick={this.menuSettingsHandler}
              >
                Settings
              </button>
            </form>
          </div>
        )}

        {this.props.game.state.isStarted && (
          <div className={styles.column}>
            <p className={styles.logo}>PAUSED</p>

            <button
              className={styles.gameButton}
              onClick={this.resumeClickHandler}
            >
              Resume
            </button>

            <button
              className={styles.gameButton}
              onClick={this.menuControlsHandler}
            >
              Controls
            </button>
            <button
              className={styles.gameButton}
              onClick={this.menuSettingsHandler}
            >
              Settings
            </button>
          </div>
        )}
      </div>
    );
  }
}
