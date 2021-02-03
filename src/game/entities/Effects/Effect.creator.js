import Bang from './Bang/Bang';
import BulletHit from './BulletHit/BulletHit';

const effectCreator = {
  bang: ({centerX, centerY, factory, key, idx}) => new Bang({centerX, centerY, factory, key, idx}),
  bulletHit: ({centerX, centerY, factory, idx}) => new BulletHit({centerX, centerY, factory, idx})
};

export default effectCreator