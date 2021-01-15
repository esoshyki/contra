import Matter from 'matter-js';

const Enemies = (entities, screen) => {

  const factory = entities.gameFactory;

  const getVector = (Enemy) => {
    const Person = entities.person.body;
    const personx = Person.position.x;
    const persony = Person.position.y;
    const enemyx = Enemy.position.x;
    const enemyy = Enemy.position.y;
    const vectorX = personx - enemyx === 0 ? 0 : personx - enemyx > 0 ? 1 : -1;
    const vectory = persony - enemyy === 0 ? 0 : persony - enemyy > 0 ? 1 : -1;
    return { x: vectorX, y: vectory }
  }

  factory.enemies.forEach(enemy => {

    enemy.animate();
  });

  return entities
}

export default Enemies