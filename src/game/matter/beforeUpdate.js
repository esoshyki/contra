import Matter from 'matter-js';

export default function beforeUpdate () {
  const entities = this.game.entities;
  const engine = entities.physics.engine;
  Matter.Events.on(engine, 'beforeUpdate', function(event) {
    Object.values(entities).forEach(entity => {
      entity.body && Matter.Body.setPosition(entity.body, {x: Math.round(entity.body.position.x), y: Math.round(entity.body.position.y)})
    })
  });
}