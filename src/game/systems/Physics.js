import Matter from 'matter-js';

const Physics = (entities, { input, time}) => {
  const engine = entities.physics.engine
  const floor = entities.floor.body;
  const person = entities.person.body;

  const inputs = input.filter(x => x.name === "onKeyDown");

  inputs.forEach(({payload}) => {

    if (payload) {
      const { key } = payload;

      switch (key) {
        case "ArrowRight":
          Matter.Body.translate(person, {x: 5, y: 0});
          break;
        case "ArrowLeft":
          Matter.Body.translate(person, {x: -5, y: 0});
          break;
        case "ArrowUp":
          Matter.Body.applyForce(person, person.position, {x: 0, y: -0.08})
        default:
          break
      }
    }
  })

  if (person.position.y > floor.position.y) {
    Matter.Body.setPosition(person, {x: 0, y: 0})
  }

  Matter.Engine.update(engine, 20)

  return entities

}

export default Physics