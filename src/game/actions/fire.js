import Bullet from '../entities/Bullet';
import Matter from 'matter-js';

const fire = entities => {

  const player = entities.player;
  const bulletProps = {};

  if (player.look && player.moving) {
    if (player.look === "up" && player.direction === "right") {
      bulletProps.x = player.body.position.x + 5;
      bulletProps.y = player.body.position.y - 5;
      bulletProps.angle = -45;
    } else if (player.look === "down" && player.direction === "right") {
      bulletProps.x = player.body.position.x + 5;
      bulletProps.y = player.body.position.y + 5;
      bulletProps.angle = 45; 
    } else if (player.look === "up" && player.direction === "left") {
      bulletProps.x = player.body.position.x - 5;
      bulletProps.y = player.body.position.y - 5;
      bulletProps.angle = -135;  
    } else if (player.look === "down" && player.direction === "left") {
      bulletProps.x = player.body.position.x - 5;
      bulletProps.y = player.body.position.y + 5;
      bulletProps.angle = 135;     
    }
  } else if (!player.look) {
    if (player.direction === "right") {
      bulletProps.x = player.body.position.x + 5;
      bulletProps.y = player.body.position.y - 10;
      bulletProps.angle = 0;
    } else if (player.direction === "left") {
      bulletProps.x = player.body.position.x - 5;
      bulletProps.y = player.body.position.y - 10;
      bulletProps.angle = 180;
    }
  } else if (player.look && !player.moving) {
    if (player.look === "up") {
      bulletProps.x = player.body.position.x - 10;
      bulletProps.y = player.body.position.y - 10;
      bulletProps.angle = -90;
    } else if (player.look === "down") {
      bulletProps.x = player.body.position.x - 10;
      bulletProps.y = player.body.position.y + 10;
      bulletProps.angle = 90;
    }
  };

  bulletProps.type = player.weaponType || 0;

  const newBullet = new Bullet(bulletProps);

  entities[`bullet${newBullet.body.id}`] = newBullet;
  entities.player.reload = true;

  return entities
};

export default fire;