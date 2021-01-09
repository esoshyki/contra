import Matter from 'matter-js';
import controls from '../../settings/contols';

export default function keyUp (entities, { input }) {

  const { payload } = input.find(x => x.name === 'onKeyUp') || {};

  if (payload) {
    const { key } = payload;
    const player = entities.player;

    if (!player) {
      return entities
    };

    switch (key) {
      case controls.moveRight: 
        player.direction = "right";
        player.moving = false;
        break;
      case controls.moveLeft:
        player.direction = "left";
        player.moving = false;
        break;
      case controls.jump:
        player.jumpPressed = false;
        break;
    };
  };

  return entities
}