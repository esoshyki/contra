import Matter from 'matter-js';
import _fire from '../actions/fire';

const Physics = (entities, screen) => {

  if (!entities.player) { return entities};
  const engine = entities.physics.engine;
  const { time } = screen;
  const actions = entities.controls.actions;
  const settings = entities.controls.settings;
  const player = entities.player;

  const moveRight = () => {
    Matter.Body.translate(player.body, {x: 3, y: 0})
  };

  const moveLeft = () => {
    if (player.body.position.x >= 18) {
      Matter.Body.translate(player.body, { x: -3, y: 0});
    } else {
      Matter.Body.setPosition(player.body, { x: 15, y: player.body.position.y});
    };
  };

  const fire = () => {
    if (!player.reload) {
      _fire(entities);
      player.fire()
    };
  };

  const jump = () => {
    if (!player.isJumping) {
      Matter.Body.applyForce(player.body, player.body.position, {x: 0, y: -5})
      player.isJumping = true;
    };
  };

  if (actions.length === 0) {
    player.angle >= 0 ? player.idleRight() : player.idleLeft();
    Matter.Engine.update(engine, time.delta)
    return entities;
  };

  if (actions.length === 1) {
    const action = actions[0];
    switch (action) {
      case settings.moveRight:
        player.moveRight();
        moveRight();
        break;
      case settings.moveLeft:
        player.moveLeft();
        moveLeft();
        break;
      case settings.jump:
        player.jump();
        jump()
        break;
      case settings.lookUp:
        player.angle >= 0 ? player.rightlookUp() : player.leftlookUp();
        break;
      case settings.lookDown:
        player.angle >= 0 ? player.rightlookDown() : player.leftlookDown();
        break;
      case settings.fire:
        fire();
        break;
    };
    Matter.Engine.update(engine, time.delta)
    return entities;
  };

  if (actions.length > 1) {

    let _fire;
    let _jump;

    if (actions.includes(settings.fire)) {
      _fire = true;
      fire();
    }

    const fireClear = actions.filter(el => el !== settings.fire);

    if (fireClear.includes(settings.jump)) {
      _jump = true;
      /*
        if (fire) {
          player.jumpAndFire()
        }
      */
      player.jump();
      jump()
    };

    const withoutJump = fireClear.filter(el => el !== settings.jump).slice(0, 2).reverse();

    if (withoutJump.includes(settings.moveRight) && withoutJump.includes(settings.lookUp)) {
      moveRight();
      player.moveRightAndLookUp();
    } else if (withoutJump.includes(settings.moveRight) && withoutJump.includes(settings.lookDown)) {
      moveRight();
      player.moveRightAndLookDown();
    } else if (withoutJump.includes(settings.moveLeft) && withoutJump.includes(settings.lookUp)) {
      moveLeft();
      player.moveLeftAndLookUp();
    } else if (withoutJump.includes(settings.moveLeft) && withoutJump.includes(settings.lookDown)) {
      moveLeft();
      player.moveLeftAndLookDown()
    } else if (withoutJump[0] === settings.moveLeft) {
      moveLeft();
      player.moveLeft();
    } else if (withoutJump[0] === settings.moveRight) {
      moveRight();
      player.moveRight();
    } else if (withoutJump[0] === settings.moveUp) {
      player.angle >= 0 ? player.rightlookUp() : player.leftlookUp();
    } else if (withoutJump[0] === settings.moveDown) {
      player.angle >= 0 ? player.rightlookUp() : player.leftlookUp();
    };
  };

  Matter.Engine.update(engine, time.delta)
  return entities;

}

export default Physics