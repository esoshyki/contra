import Farm from './farm/farm';
import Nature from './nature/nature';
import StaticItem from '../../entities/Elements/Static';
import BgItem from '../../entities/Elements/Background';
import Player from '../../entities/Player/Player';
import WaterItem from '../../entities/Elements/Water';

const height = 800;
const blockSize = Nature.blockSize;
const waterHeight = Nature.waterHeight;
const corniceHeight = Nature.corniceHeight;
const levelWidth = blockSize * 100;
const levelHeight = blockSize * 10;
const floor = height - blockSize * 5;


const backgrounds = [
	Farm.hills.element(0, height - blockSize * 3 - Farm.hills.height, levelWidth )
];

const loadBackgrounds = factory => {
	backgrounds.forEach((el, idx) => {
		const entity = new BgItem({...el, factory, element: "water"});
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);
	});
};

const ground = [
	Nature.statics.ground.upper.left(blockSize * 0, height - blockSize * 6),
	Nature.statics.ground.upper.middle(blockSize * 1, height - blockSize * 6, blockSize * 3),
	Nature.statics.ground.upper.right(blockSize * 4, height - blockSize * 6),
	Nature.statics.ground.inside(blockSize, height - blockSize * 5, blockSize * 3, blockSize * 3),
	Nature.statics.ground.vertical.left(blockSize * 0, height - blockSize * 5, blockSize * 3),
	Nature.statics.ground.vertical.right(blockSize * 4, height - blockSize * 5, blockSize * 3),
	Nature.statics.ground.down.left(blockSize * 0, height - blockSize * 2),
	Nature.statics.ground.down.middle(blockSize * 1, height - blockSize * 2, blockSize * 3),
	Nature.statics.ground.down.right(blockSize * 4, height - blockSize * 2),


	// Nature.statics.ground.corner.left.vertical( blockSize * 10, height - blockSize * 5, blockSize * 5),
	// Nature.statics.ground.upper.middle(blockSize * 11, height - blockSize * 6, blockSize * 3),
	// Nature.statics.ground.upper.right(blockSize * 14, height - blockSize * 6),
	// Nature.statics.ground.corner.right.vertical(blockSize * 14 , height - blockSize * 5, blockSize * 5),

	// Nature.statics.ground.inside.middle(blockSize * 11, height - blockSize * 5, blockSize * 3, blockSize * 6),
	// // Nature.statics.ground.inside.left(blockSize * 9, height - blockSize * 3),
	// // Nature.statics.ground.inside.middle(blockSize * 10, height - blockSize * 3),
	// // Nature.statics.ground.inside.middle(blockSize * 11, height - blockSize * 3),
	// // Nature.statics.ground.inside.middle(blockSize * 12, height - blockSize * 3),
	// // Nature.statics.ground.inside.right(blockSize * 13, height - blockSize * 3),

	// // Nature.statics.ground.inside.left(blockSize * 9, height - blockSize * 2),
	// // Nature.statics.ground.inside.middle(blockSize * 10, height - blockSize * 2),
	// // Nature.statics.ground.inside.middle(blockSize * 11, height - blockSize * 2),
	// // Nature.statics.ground.inside.middle(blockSize * 12, height - blockSize * 2),
	// // Nature.statics.ground.inside.right(blockSize * 13, height - blockSize * 2),

	// // Nature.statics.ground.inside.left(blockSize * 9, height - blockSize),
	// // Nature.statics.ground.inside.middle(blockSize * 10, height - blockSize),
	// // Nature.statics.ground.inside.middle(blockSize * 11, height - blockSize),
	// // Nature.statics.ground.inside.middle(blockSize * 12, height - blockSize),
	// // Nature.statics.ground.inside.right(blockSize * 13, height - blockSize),

	// Nature.statics.ground.ledge.left(blockSize * 9, height),
	// Nature.statics.ground.ledge.middle(blockSize * 10, height),
	// Nature.statics.ground.ledge.middle(blockSize * 11, height),
	// Nature.statics.ground.ledge.middle(blockSize * 12, height),
	// Nature.statics.ground.ledge.right(blockSize * 13, height),



	// // Nature.statics.water.inside(blockSize * 14, height),
	// // Nature.statics.water.inside(blockSize * 15, height),
	// // Nature.statics.water.inside(blockSize * 16, height),

	// Nature.statics.ground.ledge.middle(blockSize * 17, height),
	// Nature.statics.ground.ledge.middle(blockSize * 18, height),
	// Nature.statics.ground.ledge.middle(blockSize * 19, height),
	// Nature.statics.ground.ledge.middle(blockSize * 20, height),
	// Nature.statics.ground.ledge.middle(blockSize * 21, height),
	// Nature.statics.ground.ledge.middle(blockSize * 22, height),

	// Nature.statics.ground.upper.left(0, height - blockSize * 4),
	// Nature.statics.ground.upper.middle(blockSize, height - blockSize * 4),
	// Nature.statics.ground.upper.middle(blockSize * 2, height - blockSize * 4),
	// Nature.statics.ground.corner.left.horisontal(blockSize * 3, height - blockSize * 4),
	// Nature.statics.ground.corner.left.corner(blockSize * 4, height - blockSize * 4),
	// Nature.statics.ground.corner.left.vertical(blockSize * 4, height - blockSize * 5),
	// Nature.statics.ground.inside.left(blockSize * 4, height - blockSize * 6),
	// Nature.statics.ground.upper.left(blockSize * 4, height - blockSize * 7),
	// Nature.statics.ground.upper.right(blockSize * 5, height - blockSize * 7),
	// Nature.statics.ground.inside.right(blockSize * 5, height - blockSize * 6),
	// Nature.statics.ground.inside.right(blockSize * 5, height - blockSize * 5),
	// Nature.statics.ground.inside.right(blockSize * 5, height - blockSize * 4),









	// Nature.statics.ground.cornice.left(blockSize * 18, height - blockSize * 6),
	// Nature.statics.ground.cornice.middle(blockSize * 19, height - blockSize * 6),
	// Nature.statics.ground.cornice.middle(blockSize * 20, height - blockSize * 6),
	// Nature.statics.ground.cornice.middle(blockSize * 21, height - blockSize * 6),
	// Nature.statics.ground.cornice.right(blockSize * 22, height - blockSize * 6),

	// Nature.statics.ground.cornice.left(blockSize * 26, height - blockSize * 6),
	// Nature.statics.ground.cornice.middle(blockSize * 27, height - blockSize * 6),
	// Nature.statics.ground.cornice.middle(blockSize * 28, height - blockSize * 6),
	// Nature.statics.ground.cornice.right(blockSize * 29, height - blockSize * 6),

	// Nature.statics.ground.cornice.left(blockSize * 34, height - blockSize * 6),
	// Nature.statics.ground.cornice.middle(blockSize * 35, height - blockSize * 6),
	// Nature.statics.ground.cornice.right(blockSize * 36, height - blockSize * 6),
];

const loadGround = factory => {
	ground.forEach((el) => {
		const entity = new StaticItem({...el, factory, element: "ground"});
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);	
	})
};

const water = [

	Nature.statics.water.up(blockSize * 0, height - blockSize * 3 - waterHeight, blockSize * 25),
	Nature.statics.water.inside(blockSize * 0, height - blockSize * 3, blockSize * 25, blockSize * 6 ),

];

const loadWater = factory => {
	water.forEach((el, idx) => {
		const entity = new WaterItem({...el, factory, element: "water"});
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);
	})
};

const loadtTriggers = (factory) => {
	factory.triggers = [
		{ 
			condition: factory => factory.entities.player.body.position.x >= 200 && factory.triggers[0].done === false, 
			action: (factory) => factory.addBird.call(factory, 1500, 200),
			done: false,
		},
		// { 
		// 	condition: factory => factory.entities.player.body.position.x >= 600 && factory.triggers[1].done === false,
		// 	action: (factory) => factory.addGolem.call(factory, 1000, 500),
		// 	done: false,
		// },
	]
};

const loadPlayer = (factory) => {
	const player = new Player({left: 250, top: 0, factory });
	factory.entities.player = player;
	factory.addToBodies(player.body);
}


const setup = factory => {
	loadGround(factory);
	loadWater(factory);
	loadBackgrounds(factory);
	loadtTriggers(factory);
	loadPlayer(factory);
};

export default {
	setup: (factory) => setup(factory)
};