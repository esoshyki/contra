import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./game";
import './index.css';
import Container from 'react-bootstrap/Container';
import reportWebVitals from './reportWebVitals';
import classes from './index.module.css';
import rs from './rs.svg';
import gh from './github.svg';

window.onkeypress = null;

ReactDOM.render(<Container className={classes.Container}>
    <Game />
    <footer className={classes.Footer}>

      <a className={classes.Link} href="https://rs.school/js/" target="_blank">
        <img className={classes.rs} alt="course" src={rs}/>
      </a>

      <a className={classes.Link} href="/https://github.com/esoshyki" target="_blank">
        <img className={classes.rs} alt="course" src={gh}/>
      </a>

      <a className={classes.Link} href="/https://github.com/bexon32" target="_blank">
        <img className={classes.rs} alt="course" src={gh}/>
      </a>

    </footer>
  </Container>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// ServiceWorker.register();
reportWebVitals();