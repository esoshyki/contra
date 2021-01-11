// import controls from '../../settings/contols';
import Matter from 'matter-js';
import controls from '../../settings/contols';

export default function keyDown (entities, { input, time }) {

  if (input.length > 0) {
    input.forEach(el => console.log(el))
  }

  const { payload } = input.find(x => x.name === 'onKeyDown') || {};

  if (payload) {

    const { key } = payload;
    const controls = entities.controls;

    if (!entities.player) {
      return entities;
    };


    controls.keydown(key);

  }
  

  return entities
}