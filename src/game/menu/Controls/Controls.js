import React, { useState } from "react";
import classes from './Controls.module.css';

const Line = ({key, pair, setControl, setState}) => {

  const [listener, setListener] = useState(false);
  const [action, keyCode] = pair;

  const listen = (e) => {
    const _key = e.key;
    setControl(action, _key);
    setState(state => ({
      ...state,
      [action] : _key
    }));
    setListener(false);
    window.removeEventListener("keydown", listen);
  }

  const activateListener = action => {
    setListener(true);

    window.addEventListener("keydown", listen);
  };

  return (
    <div className={classes.line} key={key}>
      {listener && <div className={classes.listener}>
          <p className={classes.listenerP}>Enter key</p>
        </div>}
      <span className={classes.action}>{action}</span>
      <span className={classes.keyCode} onClick={() => activateListener(action)}>{keyCode !== " " ? keyCode : "Space"}</span>
    </div>
  )
}

export default function Controls ({game, hideControls}) {

  const settings = game.entities.controls.settings;
  const [state, setState] = useState({...settings});

  const setControl = (action, keyCode) => {
    settings[action] = keyCode;
  }

  return (
    <div className={classes.root}>
      <h2>CONTROLS</h2>
      <p className={classes.gameButton} onClick={hideControls}>Back</p>

      {Object.entries(state).map((pair, idx) => {
        return <Line key={idx} pair={pair} setControl={setControl} setState={setState} />
      })}
    </div>
  )
};

