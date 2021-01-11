// import controls from '../../settings/contols';
import Matter from 'matter-js';
import controls from '../../settings/contols';

export default function keyDown (entities, { input, time }) {

  const { payload } = input.find(x => x.name === 'onKeyDown') || {};

  if (payload) {

    const { key } = payload;
    const controls = entities.controls;

    if (!entities.player) {
      return entities;
    };


    controls.keydown(key);

  } 

  const keyPress = input.find(x => x.name === 'onKeyPress') || {};

  if (keyPress.payload) {
    console.log('press', keyPress.payload.key)
  }

  return entities
}