const Scene = (entities, screen) => {
  
  const player = entities.player;

  if (!player) {
    return entities
  };

  const scene = document.querySelector('.game-scene');
  const container = document.getElementById("game-container");
  const sceneWidth = container.offsetWidth;
  const sceneLeft = scene.offsetLeft;
  const levelWidth = scene.offsetWidth;
  const gameFactory = entities.gameFactory;

  const playerLeft = player.body.position.x;
  const playerWidth = player.size[0];

  const sceneEntities = {
    physics: entities.physics,
    controls: entities.controls,
    player: entities.player
  };

  const left = -sceneLeft;
  const right = sceneWidth - sceneLeft;

  gameFactory && gameFactory.collectStatic(left, right, entities)

  if ( playerLeft + playerWidth + sceneWidth / 2 >= levelWidth) {
    return sceneEntities
  };

  if (playerLeft >= ((sceneWidth - playerWidth) / 2)) {
    const left = ((sceneWidth - playerWidth) / 2) - playerLeft;
    console.log(left);
    scene.style.left = `${left}px`;
  };
  
  return sceneEntities

}

export default Scene