import getFromEntities from '../lib/getFromEnitites';

const Enemies = (entities, screen) => {

  const enemies = getFromEntities(entities, "enemy");

  enemies.forEach(enemy => {
    enemy.AI && enemy.AI(entities)
  });

  return entities
}

export default Enemies