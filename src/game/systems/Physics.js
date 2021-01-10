import Matter from 'matter-js';
import { TextureLoader } from 'three';
import controls from '../settings/contols';
import Bullet from '../entities/Bullet';

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

  const fire = _ => {
    const newBullet = new Bullet({
      x: player.position.x + 20,
      y: player.position.y - 10,
      type: 0,
      direction: entities.player.direction
    });
    Matter.World.add(world, newBullet.body);
    entities.player.reload = true;
    Matter.Engine.update(engine, time.delta);
    entities[`bullet${newBullet.body.id}`] = newBullet;
    return entities
  };

  if (!entities.player.reload && entities.player.fire) {
    return fire();
  }

  if (!entities.player.isJumping && entities.player.jumpPressed) {
    jump();
    Matter.Engine.update(engine, time.delta)
    return entities;
  };

  if (entities.player.moving && entities.player.direction === "right") {
    moveRight();
    Matter.Engine.update(engine, time.delta)
    return entities;
  }

  if (entities.player.moving && entities.player.direction === "left") {
    moveLeft();
    Matter.Engine.update(engine, time.delta)
    return entities;
  }

  Matter.Engine.update(engine, time.delta)
  return entities

}

export default Physics