import getFromEntities from '../lib/getFromEnitites';


const Effects = (entities, screen) => {

  const effects = getFromEntities(entities, "effect")
  effects.forEach(effect => effect.animate());

  return entities
}

export default Effects