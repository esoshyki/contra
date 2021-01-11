import Bullet from '../entities/Bullet';
import Matter from 'matter-js';

const fire = entities => {

  const player = entities.player;
  const bulletProps = {};

  bulletProps.type = player.weaponType || 0;
  bulletProps.x = player.body.position.x - player.size[0] / 2;
  bulletProps.y = player.body.position.y - player.size[1] / 2;
  bulletProps.angle = player.angle;

  const newBullet = new Bullet(bulletProps);

  entities[`bullet${newBullet.body.id}`] = newBullet;

  return entities
};

export default fire;