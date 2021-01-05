import Matter from 'matter-js';
import PlayerAnimator from './Animations/Person'

const Physics = (entities, screen) => {
  const engine = entities.physics.engine
  const person = entities.person.body;

  const { input, window, time } = screen;

  const keydowns = input.filter(x => x.name === "onKeyDown");
  const keyups = input.filter(x => x.name === "onKeyUp");

  const moveRight = _ => {
    Object.entries(entities).forEach(([key, value]) => {
      if (key !== 'person' && key !== 'physics') {
        Matter.Body.translate(value.body, { x: -3, y: 0})
      }
    })
  }

  const moveLeft = _ => {
    Object.entries(entities).forEach(([key, value]) => {
      if (key !== 'person' && key !== 'physics') {
        Matter.Body.translate(value.body, { x: 3, y: 0})
      }
    }) 
  }

  keydowns.forEach(({payload}) => {

    if (payload) {

      const { key } = payload;

      switch (key) {
        case "ArrowRight":
          if (!entities.person.moveRight) {
            entities.person.direction = "right";
            entities.person.moveRight = true;
            entities.person.background = "moveright"
          }
          break;
        case "ArrowLeft":
          if (!entities.person.moveLeft) {
            entities.person.direction = "left";
            entities.person.moveLeft = true; 
            entities.person.background = "moveleft"
          }
          break;
        case "ArrowUp":
          if (!entities.person.isJumping) {
            Matter.Body.applyForce(person, person.position, {x: 0, y: -5})
            entities.person.isJumping = true;
            setTimeout(() => {
              entities.person.isJumping = false;
            }, 1000)
          }

          break
        default:
          break
      }
    }
  })

  keyups.forEach(({payload}) => {

    if (payload) {
      const { key } = payload;

      switch (key) {
        case "ArrowRight":
          entities.person.moveRight = false;
          entities.person.background = "idleright"
          break
        case "ArrowLeft":
          entities.person.moveLeft = false;
          entities.person.background = "idleleft"
      }
    }
  })


  if (entities.person.moveRight) {
    moveRight()
  }

  if (entities.person.moveLeft) {
    moveLeft()
  }

  Matter.Engine.update(engine, 22)

  return entities

}

export default Physics