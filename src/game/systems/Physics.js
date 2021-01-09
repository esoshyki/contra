import Matter from 'matter-js';

const Physics = (entities, screen) => {

  if (!entities.player) { return entities};
  const engine = entities.physics.engine
  const player = entities.player.body;

  const { time } = screen;

  const moveRight = _ => {
    Matter.Body.translate(player, { x: 3, y: 0});
  }

  const moveLeft = _ => {
    if (player.position.x >= 3) {
      Matter.Body.translate(player, { x: -3, y: 0});   
    } else {
      Matter.Body.setPosition(player, { x: 0, y: player.position.y})
    }
  }

  const jump = _ => {
    Matter.Body.applyForce(player, player.position, {x: 0, y: -5})
    entities.player.isJumping = true;
  }

  if (entities.player.jumpPressed && !entities.player.isJumping) {
    jump()
  } 
  
  if (entities.player.direction === 'left' && entities.player.moving) {
    moveLeft()
  } 
  
  if (entities.player.direction === 'right' && entities.player.moving) {
    moveRight()
  }

  Matter.Engine.update(engine, time.delta)

  return entities

}

export default Physics