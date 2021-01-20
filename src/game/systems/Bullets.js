import Matter from 'matter-js';
import getFromEntities from '../lib/getFromEnitites';

const BulletsPhysics = (entities, screen) => {

  const bullets = getFromEntities(entities, "bullet");
  bullets.forEach(bullet => {
    bullet.move();
  })

  return entities
}

export default BulletsPhysics