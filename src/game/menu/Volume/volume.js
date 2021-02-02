import React, { useEffect, useRef } from 'react';
import classes from './volume.module.css';
import stag1volume from '../../../assets/audio/Stage1.mp3';

const sound = new Audio(stag1volume);
sound.loop = true;

export default function Volume ({changeVolume, hideVolume, volumeValue}) {

  const inp = useRef();

  useEffect(() => {
    sound.play();
  }, []);

  useEffect(() => {
    inp.current.value = volumeValue
  }, [volumeValue])

  const handleChange = (e) => {
    const volume = e.target.value;
    changeVolume(volume);
    sound.volume = volume
  };

  const _hideVolume = () => {
    sound.pause();
    sound.currentTime = 0;
    hideVolume();
  }

  return (
    <div className={classes.root}>
      <h2>CONTROLS</h2>
      <p className={classes.gameButton} onClick={_hideVolume}>Back</p>
      <input 
        ref={inp}
        type="range" 
        className={classes.input}
        name={"volume"}
        min={0}
        max={1}
        step={0.1}
        onChange={handleChange}
        value={volumeValue}
       />
    </div>
  )
  
}