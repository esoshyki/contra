export default function keyDown (entities, { input, time }) {

  const keydowns = input.filter(x => x.name === "onKeyDown");

  keydowns.forEach(event => {
    if (event.payload) {
      entities.controls.keydown(event.payload.key);
    }
  })

  return entities
}