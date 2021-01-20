import Matter from 'matter-js';

const Effects = (entities, screen) => {

  const factory = entities.gameFactory;

  if (!factory) {
    return entities
  };

  const effects = factory.effects;

  effects.forEach(effect => effect.animate());

  return entities
}

export default Effects