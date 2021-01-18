import Matter from 'matter-js';

export default function addCollosionsHandlers() {

    const entities = this.game.entities;
    Matter.Events.on(this.game.engine, "collisionStart", (event) => {

      const factory = entities.gameFactory;
      const world = entities.physics.world;
      const player = entities.player;
      const enemies = factory.enemies;
      const statics = factory.statics;
      const bullets = factory.bullets;
      const contact = event.pairs[0];
      const bodyA = contact.bodyA;
      const bodyB = contact.bodyB;

      /* Каллозии (соприкосновения тел в matter.js) содержат в себе pairs => 
        т. е. тела, которые соприкасаются. Нам нужно определить, какие два тела
        соприкоснулись, и исходя из этого, прописать, что дальше должно произойти
      */

      const isPlayerColide = _ => bodyA.id === player.body.id || bodyB.id === player.body.id;

      const isBulletColide = _ => bullets.find(el => el.body.id === bodyA.id) || bullets.find(el => el.body.id === bodyB.id);

      const isStaticColide = _ => statics.find(el => el.body.id === bodyA.id) || statics.find(el => el.body.id === bodyB.id);

      const isEnemyColide = _ => enemies.find(el => el.body.id === bodyA.id) || enemies.find(el => el.body.id === bodyB.id);

      const bullet = isBulletColide();
      const enemy = isEnemyColide();
      const staticUnit = isStaticColide();

      /* если одно из тел ИГРОК, то: */
      if (isPlayerColide()) {

        if (enemy) {
          if (entities.player.forceJump) {
            entities.player.forceJump = false;
            entities.player.isJumping = false;
            Matter.World.remove(world, enemy.body);
            enemy.die();
            setTimeout(() => {
              console.log('entitites');
              console.log(factory.game.entities);
            }, 1000)
          } else {
            player.die()
          }

        };

        /* проверка - приземлился ли игрок */
        if (staticUnit && contact.collision.normal.y === 1) {
          entities.player.isJumping = false;
          entities.player.forceJump = false;
        };

        /* проверка - полпала ли пуля в игрока */
        if (bullet) {
          /* если да = 1. игрок получает урон */
          player.hit(bullet.damage);
          /* 2. пуля попадает в игрока и исчазает */
          bullet.getInTarget()
        }

        /* проверка - если враг достиг игрока, игрок умирает */

      };

      /* Если один из соприкасающихся тел - враг, ТО */
      if (isEnemyColide()) {

        /* проверка - попала ли пуля во врага */
        if (bullet) {
          /* если да => враг получает урон */
          Matter.World.remove(world, bullet.body);
          bullet.renderer = null;
          enemy.hit(bullet.damage);
          setTimeout(() => {
            console.log('entitites');
            console.log(factory.game.entities);
          }, 2000)
        };

        /* проверка => приземлился ли враг (для случая если он вообьще может прыгать) */
        if (staticUnit && contact.collision.normal.y === 1) {
          enemy.isJumping = false;
        };
      };
    });
  };
