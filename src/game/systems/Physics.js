import Matter from 'matter-js';

const Physics = (entities, screen) => {

  if (!entities.player) { return entities };
  const engine = entities.physics.engine;
  const { time } = screen;
  const actions = entities.controls.actions;
  const settings = entities.controls.settings;
  const player = entities.player;
  const enemy1 = entities.enemy1;
  enemy1.moveLeft();
  const enemy2 = entities.enemy2;



  // реакция на сближение с големом
  if (enemy2.body.position.x - player.body.position.y < 200) {
    enemy2.fire();
  } else {
    enemy2.moveLeft();
  }

  //console.log(enemy2.body.position.x - player.body.position.y)
  // enemy2.fire();


  // console.log(enemy1)

  if (player.body.collision) {
    console.log('player collision');
    console.log(player.body.collision);
  }

  if (actions.length === 0) {
    player.angle >= 0 ? player.idleRight() : player.idleLeft();
    player.animate();
    Matter.Engine.update(engine, time.delta)
    return entities;
  };

  if (actions.length === 1) {
    const action = actions[0];
    switch (action) {
      case settings.moveRight:
        player.moveRight();
        break;
      case settings.moveLeft:
        player.moveLeft();
        break;
      case settings.jump:
        player.jump();
        break;
      case settings.lookUp:
        player.angle >= 0 ? player.rightlookUp() : player.leftlookUp();
        break;
      case settings.lookDown:
        player.angle >= 0 ? player.rightlookDown() : player.leftlookDown();
        break;
      case settings.fire:
        player.fire();
        break;
    };
    player.animate()
    Matter.Engine.update(engine, time.delta)
    return entities;
  };

  if (actions.length > 1) {

    let _fire;
    let _jump;

    if (actions.includes(settings.fire)) {
      _fire = true;
      player.fire();
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
    };

    const withoutJump = fireClear.filter(el => el !== settings.jump).slice(0, 2).reverse();

    if (withoutJump.includes(settings.moveRight) && withoutJump.includes(settings.lookUp)) {
      player.moveRightAndLookUp();
    } else if (withoutJump.includes(settings.moveRight) && withoutJump.includes(settings.lookDown)) {
      player.moveRightAndLookDown();
    } else if (withoutJump.includes(settings.moveLeft) && withoutJump.includes(settings.lookUp)) {
      player.moveLeftAndLookUp();
    } else if (withoutJump.includes(settings.moveLeft) && withoutJump.includes(settings.lookDown)) {
      player.moveLeftAndLookDown()
    } else if (withoutJump[0] === settings.moveLeft) {
      player.moveLeft();
    } else if (withoutJump[0] === settings.moveRight) {
      player.moveRight();
    } else if (withoutJump[0] === settings.moveUp) {
      player.angle >= 0 ? player.rightlookUp() : player.leftlookUp();
    } else if (withoutJump[0] === settings.moveDown) {
      player.angle >= 0 ? player.rightlookUp() : player.leftlookUp();
    };
  };

  if (player.isJumping) {
    player.jump()
  };

  player.animate()

  Matter.Engine.update(engine, time.delta)
  return entities;

}

export default Physics