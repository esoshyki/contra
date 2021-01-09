import Matter from 'matter-js';
import controls from '../../settings/contols';

export default function keyUp (entities, { input }) {

  const { payload } = input.find(x => x.name === 'onKeyUp') || {};

  if (payload) {
    const { key } = payload;
    const person = entities.person;

    if (!person) {
      return entities
    };

    switch (key) {
      case controls.moveRight: 
        person.direction = "right";
        person.moving = false;
        break;
      case controls.moveLeft:
        person.direction = "left";
        person.moving = false;
        break;
      case controls.jump:
        person.jumpPressed = false;
        break;
    };
  };

  return entities
}