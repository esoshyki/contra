import React, { useState, useEffect } from 'react';
import classes from './Menu.module.css';
import levelSound from "./../../assets/audio/Stage1.mp3";
import contraLogo from "./../../assets/sprite-sheets/logo-contra.jpg";
import menuSound from '../../assets/audio/INTRO.mp3';
import Controls from './Controls/Controls';
import Volume from './Volume/volume';
import Dead from './Dead/DeadMenu';
import dieSound from './Dead/die.mp3';

const sound = {
  intro: new Audio(menuSound),
  level: new Audio(levelSound),
  die: new Audio(dieSound)
};

sound.level.loop = true;

export default function Menu ({game, isDead, resume}) {

  useEffect(() => {
    sound.intro.play();
    setTimeout(() => {
      sound.intro.currentTime = 0
    }, 2000);
  }, [])

  useEffect(() => {
    if (isDead) {
      sound.die.play();
      stopMusic();
      stopIntro();
      setTimeout(() => {
        sound.die.pause();
        sound.die.currentTime = 0;
        resume()}, 4000)
    };
  }, [isDead]);

  const [main, setMain] = useState(true);
  const [controls, setControls] = useState(false);
  const [volume, setVolume] = useState(false);
  const [volumeValue, setVolumeValue] = useState(1);

  const playMusic = () => {
    stopIntro();
    sound.level.play();
  };

  const hideMain = () => {
    setMain(false);
  };

  const showControls = () => {
    hideMain();
    setControls(true);
  };

  const hideControls = () => {
    setControls(false);
    setMain(true);
  };

  const showVolume = () => {
    setVolume(true);
    hideMain();
  }

  const hideVolume = () => {
    setVolume(false);
    setMain(true);
  }

  const stopIntro = () => {
    sound.intro.pause();
    sound.intro.currentTime = 0;
  };

  const stopMusic = () => {
    sound.level.pause();
    sound.level.currentTime = 0;
  };

  const startGame = () => {
    game.setState({
      showMenu: false
    });
    game.gameEngine.start();
    playMusic()
  };

  const setMenuVolume = (volume) => {
    const newVolume = volume;
    setVolumeValue(volume);

    Object.keys(sound).forEach(key => {
      sound[key].volume = newVolume
    })
  };

  game.stopMusic = stopMusic;
  game.playMusic = playMusic;
  game.startGame = startGame;
  game.setMenuVolume = setMenuVolume;

  window.onclose = () => {
    stopMusic();
    stopIntro();
  };

  return (
    <div className={classes.menu}>

      {isDead && <Dead />}

      {main && (
      <div className={classes.start}>
        <div className={classes.column}>
          <img className={classes.logo}
            src={contraLogo}
            alt="Contra-logo"
          />
          <p className={classes.gameButton} onClick={startGame}>{game.isPaused ? "Resume Game" : "Start Game"}</p>
          <p className={classes.gameButton} onClick={showControls}>Controls</p>
          <p className={classes.gameButton} onClick={showVolume}>Volume</p>        
        </div>
      </div>)}

      {controls && <Controls game={game} hideControls={hideControls} />}
      {volume && <Volume changeVolume={game.changeVolume} hideVolume={hideVolume} volumeValue={volumeValue}/>}
    </div>
  )
}