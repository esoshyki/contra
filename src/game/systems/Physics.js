import Matter from 'matter-js';
import controls from '../settings/contols';
import Bullet from '../entities/Bullet';
import fire from '../actions/fire';

const Physics = (entities, screen) => {

  if (!entities.player) { return entities};
  const engine = entities.physics.engine;
  const world = entities.physics.world;
  const player = entities.player.body;

  const { time } = screen;

  const moveRight = _ => {
    Matter.Body.translate(player, { x: 3, y: 0});
  };

  const moveLeft = _ => {
    if (player.position.x >= 3) {
      Matter.Body.translate(player, { x: -3, y: 0});   
    } else {
      Matter.Body.setPosition(player, { x: 0, y: player.position.y})
    }
  };

  const jump = _ => {
    Matter.Body.applyForce(player, player.position, {x: 0, y: -5})
    entities.player.isJumping = true;
  };

  if (!entities.player.reload && entities.player.fire) {
    fire(entities);
    Matter.Engine.update(engine, time.delta);
    return entities
  };

  if (!entities.player.isJumping && entities.player.jumpPressed) {
    console.log('fire!!!')
    jump();
    Matter.Engine.update(engine, time.delta)
    return entities;
  };

  if (entities.player.moving && entities.player.direction === "right") {
    moveRight();
    Matter.Engine.update(engine, time.delta)
    return entities;
  };

  if (entities.player.moving && entities.player.direction === "left") {
    moveLeft();
    Matter.Engine.update(engine, time.delta)
    return entities;
  };

  Matter.Engine.update(engine, time.delta)
  return entities

}

export default Physics