import Matter from 'matter-js';
import getFromEntities from '../lib/getFromEnitites';

const BulletsPhysics = (entities, screen) => {

  const gravity = entities.physics.world.gravity;
  const sceneLeft = entities.sceneLeft;
  const sceneTop = entities.sceneTop;

  const bullets = getFromEntities(entities, "bullet");
  bullets.forEach(bullet => {
    bullet.move(gravity);
  });

  return entities
}

export default BulletsPhysics