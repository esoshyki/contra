import Matter from 'matter-js';
import PlayerAnimator from './Animations/Person'

const Physics = (entities, { input, time}) => {
  const engine = entities.physics.engine
  const floor = entities.floor.body;
  const person = entities.person.body;

  const keydowns = input.filter(x => x.name === "onKeyDown");
  const keyups = input.filter(x => x.name === "onKeyUp");

  keydowns.forEach(({payload}) => {

    if (payload) {
      console.log(payload)
      const { key } = payload;

      switch (key) {
        case "ArrowRight":
          if (!entities.person.moveRight) {
            entities.person.moveRight = true;
            entities.person.background = "moveright"
          }
          break;
        case "ArrowLeft":
          if (!entities.person.moveLeft) {
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


  if (person.position.y > floor.position.y) {
    Matter.Body.setPosition(person, {x: 0, y: 0})
  }

  if (entities.person.moveRight) {
    Matter.Body.translate(person, {x: 5, y: 0});
  }

  if (entities.person.moveLeft) {
    Matter.Body.translate(person, {x: -5, y: 0});
  }

  Matter.Engine.update(engine, 20)

  return entities

}

export default Physics