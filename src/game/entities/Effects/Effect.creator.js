import Bang from './Bang/Bang';
import BulletHit from './BulletHit/BulletHit';

export default {
  bang: ({centerX, centerY, factory, key, idx}) => new Bang({centerX, centerY, factory, key, idx}),
  bulletHit: ({centerX, centerY, factory, idx}) => new BulletHit({centerX, centerY, factory, idx})
}