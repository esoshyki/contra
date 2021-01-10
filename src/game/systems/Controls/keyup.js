import Matter from 'matter-js';
import controls from '../../settings/contols';
import { findAndDelete } from './lib';

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
      case controls.lookUp:
        player.look = null;
        break;
      case controls.lookDown:
        player.look = null;
        break;
      case controls.jump:
        player.jumpPressed = false;
        break;
      case controls.fire:
        player.fire = false;
        break;
    };
  };

  return entities
}