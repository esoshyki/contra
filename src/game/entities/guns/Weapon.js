import degToRad from '../../lib/degToRad';

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
  }

  shoot = () => {
    if (this.isReloaded) {
      return false
    } 
    const width = this.carrier.width / 2;
    const height = this.carrier.height / 2;
    const radians = degToRad(this.carrier.angle);
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const offsetX = cos * width;
    const offsetY = sin * height;
    const x = this.carrier.body.position.x + offsetX * 2;
    const y = this.carrier.body.position.y + offsetY * 2;
    const angle = this.carrier.angle;
    const speed = this.bulletSpeed;
    if (this.carrier.unit === "player") {
      this.factory.createPlayerBullet(x, y, angle, speed, this.damage)
    } else if (this.carrier.unit === "golem") {
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