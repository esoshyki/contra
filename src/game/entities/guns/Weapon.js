
const reloadTimes = {
  player: 200,
  golem: 1000
}


class Gun {
  constructor(carrier) {
    this.reloadTime = reloadTimes[carrier.unit];
    this.damage = 20;
    this.carrier = carrier;
    this.bulletSpeed = 10;
    this.isReloaded = false;
    this.factory = this.carrier.factory;
    console.log(carrier.unit)
  }

  shoot = () => {
    if (this.isReloaded) {
      return false
    } 
    const x = this.carrier.body.position.x - this.carrier.size[0] / 2;
    const y = this.carrier.body.position.y - this.carrier.size[1] / 2;
    const angle = this.carrier.angle;
    const speed = this.bulletSpeed;
    if (this.carrier.unit === "player") {
      this.factory.createPlayerBullet(x, y, angle, speed, this.damage)
    } else if (this.carrier.unit === "golem") {
      console.log('golem fires')
      this.factory.createGolemBullet(x, y, angle, speed, this.damage);
    };
    this.isReloaded = true;
    setTimeout(() => {
      this.isReloaded = false;
    }, this.reloadTime)
    return true
  };

};

export default Gun;