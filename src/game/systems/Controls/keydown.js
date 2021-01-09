import Matter from 'matter-js';
import controls from '../../settings/contols';

export default function keyDown (entities, { input }) {

  const { payload } = input.find(x => x.name === 'onKeyDown') || {};

  if (payload) {
    const { key } = payload;
    const player = entities.player;
    
    if (!player) {
      return entities
    };

    switch (key) {
      case controls.moveRight: 
        player.direction = "right";
        player.moving = true;
        break;
      case controls.moveLeft:
        player.direction = "left";
        player.moving = true;
        break;
      case controls.jump:
        if (!player.isJumping) {
          player.jumpPressed = true;
        }
        break;
      case controls.fire:
        if (!player.reload) {
          player.fire = true;
        }
        break;
    };
  };

  return entities
}