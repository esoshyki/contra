import Matter from 'matter-js';

const Physics = (entities, screen) => {

  if (!entities.player) { return entities};
  const engine = entities.physics.engine;
  const { time } = screen;
  const actions = entities.controls.actions;
  const settings = entities.controls.settings;
  const player = entities.player;
  
  const moveRight = () => {
    player.moveRight();
    Matter.Body.translate(player.body, {x: 3, y: 0})
  };

  const moveLeft = () => {
    player.moveLeft();
    if (player.body.position.x >= 18) {
      Matter.Body.translate(player.body, { x: -3, y: 0});   
    } else {
      Matter.Body.setPosition(player.body, { x: 15, y: player.body.position.y});
    };
  };

  if (actions.length === 0) {
    player.stop();
    Matter.Engine.update(engine, time.delta)
    return entities;
  };

  if (actions.length === 1) {
    const action = actions[0];
    switch (action) {
      case settings.moveRight:
        moveRight();
        break;
      case settings.moveLeft:
        moveLeft();
        break;
      case settings.jump:
        player.jump();
        break;
      case settings.lookUp:
        player.lookUp();
        break;
      case settings.lookDown:
        player.lookDown();
        break;
      case settings.fire:
        break;
    }
  };

  if (actions.length > 1) {
    if (actions.includes(settings.jump)) {
      player.jump()
    };

    if (actions.includes(settings.fire)) {
      console.log('fire!!!');
    };

    if (actions.includes(settings.moveRight) || actions.includes(settings.moveLeft)) {
      const moveLeftIdx = actions.indexOf(settings.moveLeft);
      const moveRightIdx = actions.indexOf(settings.moveRight);
      moveLeftIdx > moveRightIdx ? moveLeft() : moveRight();
    };

    if (actions.includes(settings.lookUp)) {
      player.lookUp()
    };

    if (actions.includes(settings.lookDown)) {
      player.lookDown()
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