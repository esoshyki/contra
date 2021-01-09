import Matter from 'matter-js';

export default function onClick (entities, { input }) {

  const { payload } = input.find(x => x.name === 'onMouseDown') || {};

  if (payload) {

  }
  return entities
}