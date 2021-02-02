import React, { useState, useEffect } from 'react';
import classes from './Menu.module.css';
import levelSound from "./../../assets/audio/Stage1.mp3";
import contraLogo from "./../../assets/sprite-sheets/logo-contra.jpg";
import menuSound from '../../assets/audio/INTRO.mp3';

export default function Menu ({game}) {

  const intro = new Audio(menuSound);

  useEffect(() => {
    intro.play();
    intro.onended = () => intro.currentTime = 0;
  })

  const audio = new Audio(levelSound);
  audio.loop = true;

  const [main, showMain] = useState(true);

  const playMusic = () => {
    stopIntro();
    audio.play();
  };

  const stopIntro = () => {
    intro.pause();
    intro.currentTime = 0;
  };

  const stopMusic = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  const startGame = () => {
    game.setState({
      showMenu: false
    });
    game.gameEngine.start();
    playMusic()
  };

  game.stopMusic = stopMusic;
  game.playMusic = playMusic;
  game.startGame = startGame;

  window.onclose = () => {
    stopMusic();
    stopIntro();
  }

  return (
    <div className={classes.menu}>
      {main && (
      <div className={classes.start}>
        <div className={classes.column}>
          <img className={classes.logo}
            src={contraLogo}
            alt="Contra-logo"
          />
          <p className={classes.gameButton} onClick={startGame}>Start Game</p>
          <p className={classes.gameButton} >Controls</p>
          <p className={classes.gameButton} >Volume</p>        
        </div>
      </div>)}
    </div>
  )
}