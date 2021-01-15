const BulletsPhysics = (entities, screen) => {

  const factory = entities.gameFactory;
  const bullets = factory.bullets;

  if (!bullets.length) {
    return entities;
  }

  bullets.forEach(bullet => {
    bullet.move()
  })

  return entities
}

export default BulletsPhysics