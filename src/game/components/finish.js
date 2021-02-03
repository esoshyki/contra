import React, { useEffect } from 'react';
import classes from './finish.module.css';
import finishGameMusic from '../../assets/audio/engGame.mp3';

export default function Finish ({restartGame}) {

  const audio = new Audio(finishGameMusic);

  useEffect(() => {
    audio.play()
  });

  const handleClick = () => {
    audio.pause();
    audio.currentTime = 0;
    restartGame()
  };

  return (<div className={classes.content}>
    <div onClick={handleClick} className={classes.titres}>
      <h2>THE END</h2>
      <p>Director:  <span>shyki</span></p>
      <p>Level Disigner: <span>bexon26</span></p>
      <p>Menu: <span>Veleron</span></p>
      <p>Engine: <span>shyki</span></p>
      <p>Enemies and level design: <span>bexon26</span></p>
      <p>Bosses: <span>shyki</span></p>
      <p>Level creation mechanic: <span>shyki</span></p>
      <p>Made for <span className={classes.rsschool}>rsschool</span> 2021</p>      
    </div>
  </div>)
}