import { RGB_PVRTC_2BPPV1_Format } from 'three';
import getFromEntities from '../lib/getFromEnitites';

const Scene = (entities, screen) => {

  const player = entities.player;

  if (!player) {
    return entities
  };

  const scene = document.querySelector('.game-scene');
  const container = document.getElementById("game-container");
  const sceneLeft = Math.abs(scene.offsetLeft);
  const sceneTop = Math.abs(scene.offsetTop);

  const sceneWidth = container.offsetWidth;
  const sceneHeight = container.offsetHeight;
  const factory = entities.factory;

  const playerLeft = player.body.position.x;
  const playerTop = player.body.position.y;
  const playerWidth = player.width;
  const bottomCameraSpacing = 450;

  const isInScene = entity => {

    const pifagor = (a, b) => Math.sqrt(a ** 2 + b ** 2);

    const centerX = entity.body.position.x;
    const centerY = entity.body.position.y;
    const halfWidth = entity.width / 2;
    const halfHeight = entity.height / 2;
    const entityDig = pifagor(halfHeight, halfWidth);

    const halfSceneWidth = sceneWidth / 2;
    const halfSceneHeight = sceneHeight / 2;
    const sceneCenterX = sceneLeft + halfSceneWidth;
    const sceneCenterY = sceneTop + halfSceneHeight;
    const sceneDig = pifagor(halfSceneWidth, halfSceneHeight);

    const deltaX = sceneCenterX - centerX;
    const deltaY = sceneCenterY - centerY;

    return pifagor(deltaX, deltaY) < entityDig + sceneDig
  }


  const triggers = factory.triggers;

  triggers.forEach((trigger, idx) => {
    if (trigger.condition(factory)) {
      trigger.action(factory);
      trigger.done = true;
    }
  });

  const left = ((sceneWidth - playerWidth) / 2) - playerLeft;

  if (playerLeft >= ((sceneWidth - playerWidth) / 2)) {
    scene.style.left = `${left}px`;
    Object.values(entities).forEach(entity => {
      if (entity.type === "background") {
        entity.move(left);
      };
    });
  };

  Object.values(entities).forEach(entity => {
    if (entity.body && entity.type !== "player") {
      entity.isVisible = isInScene(entity);
    };  
  }) 


  const top = -bottomCameraSpacing + sceneHeight - playerTop;
  if (top > -200) {
    scene.style.top = `${top}px`;
  }


  getFromEntities(entities, "enemy").forEach(enemy => {
    if (enemy.body.position.x < sceneLeft || enemy.body.position.y > sceneHeight) {
      factory.removeUnit(enemy)
    }
  });

  return entities

}

export default Scene