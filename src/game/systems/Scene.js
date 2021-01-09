import Matter from 'matter-js';

const Scene = (entities, screen) => {
  
  const person = entities.person;

  if (!person) {
    return entities
  };

  const scene = document.querySelector('.game-scene');
  const sceneWidth = scene.offsetWidth;

  const personLeft = person.body.position.x;
  const personWidth = person.size[0];

  if (personLeft >= (sceneWidth - personWidth) / 2) {
    const left = ((sceneWidth - personWidth) / 2) - personLeft;
    scene.style.left = `${left}px`
  }
  
  // const moveSceneLeft = _ => {
  //   if (person.position.x > 560 && (root.offsetWidth - person.position.x > 560)) {
  //     root.style.left = `${root.offsetLeft - 3}px`;
  //     Object.keys(entities).forEach((key) => {
  //       const left = entities[key].left;
  //       const perspective = entities[key].perspective;
  //       if (key.match(/background\d+/)) {
  //         entities[key].left = left - 0.03 * perspective;
  //       };
  //     });
  //   }
  // }

  // const moveSceneRight = _ => {
  //   if (person.position.x < 560 && (root.offsetLeft < 0)) {
  //     root.style.left = `${root.offsetLeft + 3}px`;
  //     Object.keys(entities).forEach((key) => {
  //       const left = entities[key].left;
  //       const perspective = entities[key].perspective;
  //       if (key.match(/background\d+/)) {
  //         entities[key].left = left + 0.03 * perspective;
  //       };
  //     });
  //   };
  // }

  return entities

}

export default Scene