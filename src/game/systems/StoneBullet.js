import Matter from 'matter-js';

const BulletsPhysics = (entities, screen) => {

  const world = entities.physics.world;

  Object.entries(entities).filter(([key, entity]) => {
    return entity.type === "stoneBullet"
  }).forEach(([key, entity]) => {
    entity.move();

    if (entity.distance > 500) {
      Matter.World.remove(world, entity.body);
      if (entity.body.collision) {
        console.log('here')
      }
      delete entities[key]
    }
  });

  return entities
}

export default BulletsPhysics