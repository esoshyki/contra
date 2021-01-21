import Matter from 'matter-js';
import getFromEntities from '../lib/getFromEnitites'

export default function addCollosionsHandlers() {

    const entities = this.factory.entities;
    console.log('colision setup')
    console.log(entities)
    Matter.Events.on(this.factory.engine, "collisionStart", (event) => {

      const player = entities.player;
      const enemies = getFromEntities(entities, "enemy");
      const statics = getFromEntities(entities, "static");
      const bullets = getFromEntities(entities, "bullet");
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

      const isWaterColide = _ => statics.find(el => el.type === "water" && el.body.id === bodyA.id) || 
                                 statics.find(el => el.type === "water" && el.body.id === bodyB.id);

      const bullet = isBulletColide();
      const enemy = isEnemyColide();
      const staticUnit = isStaticColide();

      /* если одно из тел ИГРОК, то: */

      if (isPlayerColide()) {

        if (enemy) {
          if (entities.player.forceJump) {
            entities.player.forceJump = false;
            entities.player.isJumping = false;
            enemy.die();
          } else {
            player.die()
          }

        };

        /* проверка - приземлился ли игрок */
        if (staticUnit) {
          if (staticUnit.type === "water") {
            player.swim()
          } else if (staticUnit && contact.collision.normal.y === 1) {
            console.log('colide!!!')
            console.log(staticUnit)
            entities.player.isJumping = false;
            entities.player.forceJump = false;
          };
        };
        /* проверка - полпала ли пуля в игрока */
        if (bullet) {
          /* если да = 1. игрок получает урон */
          if (bullet.shooter !== "player") {
            player.hit(bullet.damage);
            /* 2. пуля попадает в игрока и исчазает */
            bullet.hitTarget() 
          };
        }

        /* проверка - если враг достиг игрока, игрок умирает */

      };

      /* Если один из соприкасающихся тел - враг, ТО */
      if (isEnemyColide()) {

        /* проверка - попала ли пуля во врага */
        if (bullet) {
          /* если да => враг получает урон */
          enemy.hit(bullet.damage);
          bullet.hitTarget();
        };

        /* проверка => приземлился ли враг (для случая если он вообьще может прыгать) */
        if (staticUnit && contact.collision.normal.y === 1) {
          enemy.isJumping = false;
        };
      };

      if (isBulletColide()) {
        if (staticUnit) {
          bullet.hitTarget();
        }
      }
    });
  };
