const Scene = (entities, screen) => {
  
  const player = entities.player;

  if (!player) {
    return entities
  };

  const scene = document.querySelector('.game-scene');
  const container = document.getElementById("game-container");
  const sceneWidth = container.offsetWidth;
  const gameFactory = entities.gameFactory;

  const playerLeft = player.body.position.x;
  const playerWidth = player.size[0];


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