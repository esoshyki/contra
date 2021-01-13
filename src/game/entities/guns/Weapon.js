import Bullet from './Bullet';

class Gun {
  constructor(carrier) {
    this.reloadTime = 200;
    this.damage = 20;
    this.carrier = carrier;
    this.bulletSpeed = 10;
    this.isReloaded = false;
  }

  shoot = () => {
    if (this.isReloaded) {
      return false
    } 
    const bulletProps = {};
    bulletProps.type = 0;
    bulletProps.x = this.carrier.body.position.x - this.carrier.size[0] / 2;
    bulletProps.y = this.carrier.body.position.y - this.carrier.size[1] / 2;
    bulletProps.angle = this.carrier.angle;
    bulletProps.speed = this.bulletSpeed + this.carrier.speed;
    const newBullet = new Bullet(bulletProps);
    this.carrier.entities[`bullet${newBullet.body.id}`] = newBullet;
    this.isReloaded = true;
    setTimeout(() => {
      this.isReloaded = false;
    }, this.reloadTime)
    return true
  };

};

export default Gun;