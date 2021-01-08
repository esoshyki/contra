import Matter from 'matter-js';

const Physics = (entities, screen) => {
  const engine = entities.physics.engine
  const person = entities.person.body;
  const root = document.querySelector('.game-screen')

  const { time } = screen;

  const movePerspectiveRught = _ => {
    if (person.position.x > 560 && (root.offsetWidth - person.position.x > 560)) {
      root.style.left = `${root.offsetLeft - 3}px`;
      Object.keys(entities).forEach((key) => {
        const left = entities[key].left;
        const perspective = entities[key].perspective;
        if (key.match(/background\d+/)) {
          entities[key].left = left - 0.03 * perspective;
        };
      });
    }
  }

  const movePerspectiveLeft = _ => {
    if (person.position.x < 560 && (root.offsetLeft < 0)) {
      root.style.left = `${root.offsetLeft + 3}px`;
      Object.keys(entities).forEach((key) => {
        const left = entities[key].left;
        const perspective = entities[key].perspective;
        if (key.match(/background\d+/)) {
          entities[key].left = left + 0.03 * perspective;
        };
      });
    };
  }

  const moveRight = _ => {
    Matter.Body.translate(person, { x: 3, y: 0});
    movePerspectiveRught()
  }

  const moveLeft = _ => {
    Matter.Body.translate(person, { x: -3, y: 0});
    movePerspectiveLeft()
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