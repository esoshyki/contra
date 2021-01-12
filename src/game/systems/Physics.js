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

    console.log(actions);

    if (actions.includes(settings.jump)) {
      player.jump();
      jump()
    };

    if (actions.includes(settings.fire)) {
      fire();
    };

    if (actions.includes(settings.moveRight) || actions.includes(settings.moveLeft)) {
      const moveLeftIdx = actions.indexOf(settings.moveLeft);
      const moveRightIdx = actions.indexOf(settings.moveRight);
      const lookUpIdx = actions.indexOf(settings.lookUp);
      const lookDownIdx = actions.indexOf(settings.lookDown);
      if (moveRightIdx > moveLeftIdx) {
        if (lookDownIdx >= 0 && lookDownIdx > lookUpIdx) {
          player.moveRightAndLookDown();
          moveRight()
        } else if (lookDownIdx < 0 && lookUpIdx < 0) {
          player.moveRight();
          moveRight()
        } else if (lookUpIdx >= 0 && lookUpIdx > lookDownIdx) {
          player.moveRightAndLookUp();
          moveRight()
        }
      } else {
        if (lookDownIdx >= 0 && lookDownIdx > lookUpIdx) {
          player.moveLeftAndLookDown();
          moveLeft()
        } else if (lookDownIdx < 0 && lookUpIdx < 0) {
          player.moveLeft();
          moveLeft()
        } else if (lookUpIdx >= 0 && lookUpIdx > lookDownIdx) {
          player.moveLeftAndLookUp();
          moveLeft()
        }   
      }

    };
  }

  // if (!entities.player.reload && entities.controls.fire) {
  //   fire(entities);
  //   Matter.Engine.update(engine, time.delta);
  //   return entities
  // };


  Matter.Engine.update(engine, time.delta)
  return entities;

}

export default Physics