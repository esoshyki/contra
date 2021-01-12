// import controls from '../../settings/contols';
import Matter from 'matter-js';
import controls from '../../settings/contols';

export default function keyDown (entities, { input, time }) {

  const { payload } = input.find(x => x.name === 'onKeyDown') || {};

  const keydowns = input.filter(x => x.name === "onKeyDown");

  keydowns.forEach(event => {
    if (event.payload) {
      entities.controls.keydown(event.payload.key);
    }
  })

  return entities
}