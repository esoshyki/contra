import Matter from 'matter-js';
import controls from '../../settings/contols';
import { findAndDelete } from './lib';

export default function keyUp (entities, { input }) {

  const { payload } = input.find(x => x.name === 'onKeyUp') || {};

  if (payload) {

    const { key } = payload;

    if (!entities.player) {
      return entities;
    };

    entities.controls.keyup(key)

  };


  return entities
}