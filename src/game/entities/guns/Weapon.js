
class Gun {
  constructor(carrier) {
    this.reloadTime = 200;
    this.damage = 20;
    this.carrier = carrier;
    this.bulletSpeed = 10;
    this.isReloaded = false;
    this.factory = this.carrier.factory;
  }

  shoot = () => {
    if (this.isReloaded) {
      return false
    }
    const x = this.carrier.body.position.x - this.carrier.size[0] / 2;
    const y = this.carrier.body.position.y - this.carrier.size[1] / 2;
    const angle = this.carrier.angle;
    const speed = this.bulletSpeed;
    this.factory.createBullet(x, y, angle, speed, this.damage);
    console.log(this.carrier)

    //this.factory.createStoneBullet(x, y, angle, speed, this.damage);
    this.isReloaded = true;
    setTimeout(() => {
      this.isReloaded = false;
    }, this.reloadTime)
    return true
  };

};

export default Gun;