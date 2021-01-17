import Matter from 'matter-js';

const Enemies = (entities, screen) => {

  const factory = entities.gameFactory;
  const enemies = factory.enemies;
  const player = entities.player;

  enemies.forEach(enemy => {
    enemy.AI(player)
  })

  return entities
}

export default Enemies