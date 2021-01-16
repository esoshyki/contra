import Matter from 'matter-js';

export default class Collosion {
  constructor(game) {
    this.game = game;
    this.engine = this.game.engine;
  };

  addCollosionsHandlers = () => {

    Matter.Events.on(this.engine, "collisionStart", (event) => {
      const entities = this.game.entities;
      const factory = entities.gameFactory;
      const player = entities.player;
      const enemies = factory.enemies;
      const statics = factory.statics;
      const bullets = factory.bullets;
      const contact = event.pairs[0];
      const bodyA = contact.bodyA;
      const bodyB = contact.bodyB;

      const isPlayarColide = _ => bodyA.id === player.body.id || bodyB.id === player.body.id;

      const isBulletColide = _ => bullets.find(el => el.body.id === bodyA.id) || bullets.find(el => el.body.id === bodyB.id);

      const isStaticColide = _ => statics.find(el => el.body.id === bodyA.id) || statics.find(el => el.body.id === bodyB.id);

      const isEnemyColide = _ => enemies.find(el => el.body.id === bodyA.id) || enemies.find(el => el.body.id === bodyB.id);

      const bullet = isBulletColide();
      const enemy = isEnemyColide();
      const staticUnit = isStaticColide();

      if (isPlayarColide()) {

        /* check is player landing*/
        if (staticUnit && contact.collision.normal.y === 1) {
          this.game.entities.player.isJumping = false;
        };

        /* check if player hit by enemy's bullet */
        if (bullet) {
          player.hit(bullet.damage);
        }

        if (enemy) {
          player.die()
        };

      };

    });

    
    Matter.Events.on(this.engine, 'beforeUpdate', function () {
      // this.game.entities && this.game.entities.forEach(el => {
      //   el.body.position.x = Math.round(el.body.position.x);
      //   el.body.position.y = Math.round(el.body.position.y);
      // })
    });

  }
}