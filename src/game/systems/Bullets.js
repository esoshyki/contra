import Matter from 'matter-js';

const BulletsPhysics = (entities, screen) => {

  const world = entities.physics.world;

  Object.entries(entities).filter(([key, entity]) => {
    return entity.type === "bullet"
  }).forEach(([key, entity]) => {
    entity.move();

    if (entity.distance > 500) {
      Matter.World.remove(world, entity.body);
      delete entities[key]
    }
  });

  return entities
}

export default BulletsPhysics