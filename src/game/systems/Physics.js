import Matter from 'matter-js';

const Physics = (entities, screen) => {

  if (!entities.person) { return entities};
  const engine = entities.physics.engine
  const person = entities.person.body;
  const root = document.querySelector('.game-screen')

  const { time } = screen;

  const moveRight = _ => {
    Matter.Body.translate(person, { x: 3, y: 0});
  }

  const moveLeft = _ => {
    if (person.position.x >= 3) {
      Matter.Body.translate(person, { x: -3, y: 0});   
    } else {
      Matter.Body.setPosition(person, { x: 0, y: person.position.y})
    }
  }

  const jump = _ => {
    Matter.Body.applyForce(person, person.position, {x: 0, y: -5})
    entities.person.isJumping = true;
  }

  if (entities.person.jumpPressed && !entities.person.isJumping) {
    jump()
  } 
  
  if (entities.person.direction === 'left' && entities.person.moving) {
    moveLeft()
  } 
  
  if (entities.person.direction === 'right' && entities.person.moving) {
    moveRight()
  }

  Matter.Engine.update(engine, time.delta)

  return entities

}

export default Physics