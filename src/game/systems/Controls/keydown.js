import Matter from 'matter-js';
import controls from '../../settings/contols';
import { deleteAndPush, pushOrPass } from './lib';

export default function keyDown (entities, { input }) {

  const { payload } = input.find(x => x.name === 'onKeyDown') || {};

  if (payload) {

    const { key } = payload;
    const player = entities.player;

   
    if (!player) {
      return entities
    };

    if (!Object.values(controls).includes(key)) {
      return entities
    };

    if (key === controls.moveRight) {
      console.log('here')
      player.direction = "right";
      player.moving = true;
    };

    if (key === controls.moveLeft) {
      player.direction = "left";
      player.moving = true;
    };

    if (key === controls.lookUp) {
      player.look = "up";
    };

    if (key === controls.lookDown) {
      player.look = "down";
    };

    if (key === controls.jump) {
      if (!player.isJumping) {
        player.jumpPressed = true;
      };  
    };

    if (key === controls.fire) {
      player.fire = true;
    }
  };

  return entities
}