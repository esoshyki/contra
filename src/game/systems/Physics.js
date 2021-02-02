import Matter from 'matter-js';

const Physics = (entities, screen) => {

  if (!entities.player) { return entities};
  const engine = entities.physics.engine;
  const { time } = screen;
  const player = entities.player;
  const controls = entities.controls;

  if (player.body.position.y > entities.levelHeight + 100) {
    player.die();
    player.setPosition({x: 0, y: 0})
  } else {
    player.makeAction(controls);
  };

  Matter.Engine.update(engine, time.delta)
  return entities;

}

export default Physics