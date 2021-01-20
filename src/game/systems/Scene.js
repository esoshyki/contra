const Scene = (entities, screen) => {

  const player = entities.player;

  if (!player) {
    return entities
  };

  const scene = document.querySelector('.game-scene');
  const container = document.getElementById("game-container");
  const sceneWidth = container.offsetWidth;
  const sceneHeight = container.offsetHeight;
  const gameFactory = entities.gameFactory;

  const playerLeft = player.body.position.x;
  const playerTop = player.body.position.y;
  const playerWidth = player.size[0];
  const playerHeight = player.size[1];
  const bottomCameraSpacing = 450;

  const factory = entities.gameFactory;
  const triggers = factory.triggers;

  /* В factory/1lvl/level1.js мы создаем триггеры, у триггера есть 
  condition (условие), если оно выполнено, то запускаем action (действие) 
    factory.tiggers = [
    { 
      condition: factory => factory.player.body.position.x >= 200, 
      action: factory => factory.addBird 
    },
    ...
  ]
  */
  triggers.forEach((trigger, idx) => {
    if (trigger.condition(factory)) {
      trigger.action(factory);
      trigger.done = true;
    }
  });

  const top = -bottomCameraSpacing + sceneHeight - playerTop;
  scene.style.top = `${top}px`;

  if (playerLeft >= ((sceneWidth - playerWidth) / 2)) {
    const left = ((sceneWidth - playerWidth) / 2) - playerLeft;
    const distance = left - entities.scene.left;
    gameFactory.moveBackgrounds(distance);
    entities.scene.left = left;
    scene.style.left = `${left}px`;
  };

  return entities

}

export default Scene