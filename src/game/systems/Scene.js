import getFromEntities from '../lib/getFromEnitites';

const Scene = (entities, screen) => {
  
  const player = entities.player;

  if (!player) {
    return entities
  };

  const scene = document.querySelector('.game-scene');
  const container = document.getElementById("game-container");
  const sceneWidth = container.offsetWidth;
  const sceneHeight = container.offsetHeight;
  const factory = entities.factory;

  const playerLeft = player.body.position.x;
  const playerTop = player.body.position.y;
  const playerWidth = player.width;
  const bottomCameraSpacing = 450;

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

  const backgrounds = getFromEntities(entities, "background");

  const top = -bottomCameraSpacing + sceneHeight - playerTop;
  scene.style.top = `${top}px`;

  if (playerLeft >= ((sceneWidth - playerWidth) / 2)) {

    const left = ((sceneWidth - playerWidth) / 2) - playerLeft;

    const distance = left - entities.scene.left;

    backgrounds.forEach(el => {
      const left = el.left - (distance * 5 / el.perspective);
      el.left = left;
    });

    entities.scene.left = left;
    scene.style.left = `${left}px`;
  };

  return entities

}

export default Scene