import React, { useState } from 'react';
import classes from './bar.module.css';
import healthPng from './health.png';

export default function Bar ({game}) {

  const { health } = game.state;

  return (
    <div className={classes.root}>
      <div className={classes.health}>
        <div 
          className={classes.healthIcon}
          style={{
          backgroundImage: `url(${healthPng})`
        }}></div>
        <span 
          className={classes.healthValue}
          style={{
            
          }}>{health}</span>
      </div>
    </div>
  )
}


