const BulletsPhysics = (entities, screen) => {

  const bullets = Object.keys(entities).filter(el => el.match(/bullet\d+/));

  if (bullets == false) {
    return entities;
  }

  bullets.map(key => entities[key]).forEach(el => {
    el.move()});

  bullets.forEach(key => {
    if (entities[key].distance >= 400) {
      delete entities[key]
    }
  })

  return entities
}

export default BulletsPhysics