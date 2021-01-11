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

    if (key === controls.moveRight) {
      player.direction = "right";
      player.moving = false;      
    };

    if (key === controls.moveLeft) {
      player.direction = "left";
      player.moving = false;
    };

    if (key === controls.lookUp) {
      player.look = null;
    };

    if (key === controls.lookDown) {
      player.look = null;
    };

    if (key === controls.jump) {
      player.jumpPressed = false;
    }

    if (key === controls.fire) {
      player.fire = false;
    }
  };

  return entities
}