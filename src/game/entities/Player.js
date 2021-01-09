import Matter from 'matter-js';
import Person from '../renderers/Person';

export default function createPlayer ({world, entities} ) {
  const player = Matter.Bodies.rectangle(200, 600, 45, 45, { mass: 100, density: 10 ** 10, });
  entities.player = { 
    body: player, 
    size: [45, 45], 
    isJumping: false, 
    color: "red", 
    renderer: Person, 
    backgroundX: -40,
    backgroundY: 0,
    direction: "right",
    moving: false,
    rotate: false,
    health: 100
    };

  Matter.World.add(world, player);
}

