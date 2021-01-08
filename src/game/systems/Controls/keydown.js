import Matter from 'matter-js';
import controls from '../../settings/contols';

export default function keyDown (entities, { input }) {

  const { payload } = input.find(x => x.name === 'onKeyDown') || {};

  if (payload) {
    const { key } = payload;
    const person = entities.person;

    switch (key) {
      case controls.moveRight: 
        person.direction = "right";
        person.moving = true;
        break;
      case controls.moveLeft:
        person.direction = "left";
        person.moving = true;
        break;
      case controls.jump:
        if (!person.isJumping) {
          person.jumpPressed = true;
        }
        break;
    };
  };

  return entities
}