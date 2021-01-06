import Matter from 'matter-js';

const Physics = (entities, screen) => {
  const engine = entities.physics.engine
  const person = entities.person.body;

  const { input, window, time } = screen;

  const keydowns = input.filter(x => x.name === "onKeyDown");
  const keyups = input.filter(x => x.name === "onKeyUp");

  const moveRight = _ => {
    Object.entries(entities).forEach(([key, value]) => {
      if (key.match(/static\d+/)) {
        Matter.Body.translate(value.body, { x: -3, y: 0})
      };
      if (key.match(/background\d+/)) {
        const { perspective, left } = value;
        entities[key].left = left - (0.03 * perspective);
      };
    })
  }

  const moveLeft = _ => {
    Object.entries(entities).forEach(([key, value]) => {
      if (key.match(/static\d+/)) {
        Matter.Body.translate(value.body, { x: 3, y: 0})
      };
      if (key.match(/background\d+/)) {
        const { perspective, left } = value;
        entities[key].left = left + (0.03 * perspective);
      };
    }) 
  }

  const jump = _ => {
    Matter.Body.applyForce(person, person.position, {x: 0, y: -5})
    entities.person.isJumping = true;
  }

  keydowns.forEach(({payload}) => {

    if (payload) {

      const { key } = payload;

      switch (key) {
        case "ArrowRight":
          if (!entities.person.moveRight) {
            entities.person.direction = "right";
            entities.person.moveLeft = false;
            entities.person.moveRight = true;
            entities.person.background = "moveright"
          }
          break;
        case "ArrowLeft":
          if (!entities.person.moveLeft) {
            entities.person.direction = "left";
            entities.person.moveRight = false;
            entities.person.moveLeft = true; 
            entities.person.background = "moveleft"
          }
          break;
        case "ArrowUp":
          console.log(entities.person.isJumping)
          if (!entities.person.isJumping) {
            entities.person.jumpPressed = true;
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
          break
        case "ArrowUp":
          entities.person.jumpPressed = false;
        default:
          break
      }
    }
  })


  if (entities.person.moveRight) {
    moveRight()
  }

  if (entities.person.moveLeft) {
    moveLeft()
  }

  if (entities.person.jumpPressed && !entities.person.isJumping) {
    jump()
  }

  Matter.Engine.update(engine, time.delta)

  return entities

}

export default Physics