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
	Farm.hills.element(0, height - blockSize * 3 - Farm.hills.height, levelWidth)
];

const loadBackgrounds = factory => {
	backgrounds.forEach((el, idx) => {
		const entity = new BgItem({ ...el, factory, element: "water" });
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);
	});
};

/**  Земля    
*!Земля с травой слева (х, y)
Nature.statics.ground.upper.left(blockSize * 0, height - blockSize * 4), 
*!Земля с травой внутри (х, y, ширина)
Nature.statics.ground.upper.middle(blockSize * 1, height - blockSize * 4, blockSize * 2), 
*!Земля с травой справа (х, y)
Nature.statics.ground.upper.right(blockSize * 5, height - blockSize * 7), 

*!Земля внутри слева (х, y, высота)
Nature.statics.ground.vertical.left(blockSize * 0, height - blockSize * 3, blockSize * 3),
*!Земля внутри (х, y, ширина, высота)
Nature.statics.ground.inside(blockSize, height - blockSize * 3, blockSize * 4, blockSize * 3),
*!Земля внутри справа (х, y, высота)
Nature.statics.ground.vertical.right(blockSize * 5, height - blockSize * 6, blockSize * 6),

*!Земля низ слева (х, y)
Nature.statics.ground.down.left(blockSize * 0, height),
*!Земля низ внутри (х, y, ширина)
Nature.statics.ground.down.middle(blockSize * 1, height, blockSize * 4), 
*!Земля низ справа (х, y)
Nature.statics.ground.down.right(blockSize * 5, height),
**/


/**  Платформа
 *!Платформа слева (x,y)
Nature.statics.ground.cornice.left(blockSize * 34, height - blockSize * 6),
*!Платформа внутри (x,y)
Nature.statics.ground.cornice.middle(blockSize * 35, height - blockSize * 6, blockSize),
*!Платформа справа (x,y)
Nature.statics.ground.cornice.right(blockSize * 36, height - blockSize * 6),
**/
const ground = [
	Nature.statics.ground.upper.left(blockSize * 0, height - blockSize * 4),
	Nature.statics.ground.upper.middle(blockSize * 1, height - blockSize * 4, blockSize * 2),
	Nature.statics.ground.upper.rightCorner(blockSize * 3, height - blockSize * 4, blockSize),
	Nature.statics.ground.upper.left(blockSize * 4, height - blockSize * 7),
	Nature.statics.ground.upper.right(blockSize * 5, height - blockSize * 7),
	Nature.statics.ground.inside(blockSize, height - blockSize * 3, blockSize * 4, blockSize * 3),
	Nature.statics.ground.vertical.left(blockSize * 4, height - blockSize * 6, blockSize * 2),
	Nature.statics.ground.vertical.left(blockSize * 0, height - blockSize * 3, blockSize * 3),
	Nature.statics.ground.vertical.right(blockSize * 5, height - blockSize * 6, blockSize * 6),
	Nature.statics.ground.down.left(blockSize * 0, height),
	Nature.statics.ground.down.middle(blockSize * 1, height, blockSize * 4),
	Nature.statics.ground.down.right(blockSize * 5, height),

	Nature.statics.ground.upper.left(blockSize * 9, height - blockSize * 4),
	Nature.statics.ground.upper.middle(blockSize * 10, height - blockSize * 4, blockSize * 3),
	Nature.statics.ground.upper.right(blockSize * 13, height - blockSize * 4),
	Nature.statics.ground.vertical.left(blockSize * 9, height - blockSize * 3, blockSize * 3),
	Nature.statics.ground.inside(blockSize * 10, height - blockSize * 3, blockSize * 3, blockSize * 3),
	Nature.statics.ground.vertical.right(blockSize * 13, height - blockSize * 3, blockSize * 3),
	Nature.statics.ground.down.left(blockSize * 9, height),
	Nature.statics.ground.down.middle(blockSize * 10, height, blockSize * 3),
	Nature.statics.ground.down.right(blockSize * 13, height),

	Nature.statics.ground.cornice.left(blockSize * 18, height - blockSize * 6),
	Nature.statics.ground.cornice.middle(blockSize * 19, height - blockSize * 6, blockSize * 3),
	Nature.statics.ground.cornice.right(blockSize * 22, height - blockSize * 6),

	Nature.statics.ground.cornice.left(blockSize * 26, height - blockSize * 6),
	Nature.statics.ground.cornice.middle(blockSize * 27, height - blockSize * 6, blockSize * 2),
	Nature.statics.ground.cornice.right(blockSize * 29, height - blockSize * 6),

	Nature.statics.ground.cornice.left(blockSize * 34, height - blockSize * 6),
	Nature.statics.ground.cornice.middle(blockSize * 35, height - blockSize * 6, blockSize),
	Nature.statics.ground.cornice.right(blockSize * 36, height - blockSize * 6),

	Nature.statics.ground.cornice.left(blockSize * 42, height - blockSize * 6),
	Nature.statics.ground.cornice.right(blockSize * 43, height - blockSize * 6),


	Nature.statics.ground.upper.left(blockSize * 47, height - blockSize * 9),
	Nature.statics.ground.upper.middle(blockSize * 48, height - blockSize * 9, blockSize * 15),
	Nature.statics.ground.vertical.left(blockSize * 47, height - blockSize * 8, blockSize * 8),
	Nature.statics.ground.inside(blockSize * 48, height - blockSize * 8, blockSize * 31, blockSize * 8),
	Nature.statics.ground.upper.rightCorner(blockSize * 76, height - blockSize * 12, blockSize),


	Nature.statics.ground.down.left(blockSize * 47, height),
	Nature.statics.ground.down.middle(blockSize * 48, height, blockSize * 32),
	Nature.statics.ground.down.right(blockSize * 94, height),

	Nature.statics.ground.vertical.left(blockSize * 63, height - blockSize * 11, blockSize * 2),
	Nature.statics.ground.inside(blockSize * 64, height - blockSize * 11, blockSize * 15, blockSize * 3),


	Nature.statics.ground.cornice.left(blockSize * 75, height - blockSize * 15),
	Nature.statics.ground.cornice.middle(blockSize * 76, height - blockSize * 15, blockSize * 2),

	Nature.statics.ground.upper.left(blockSize * 63, height - blockSize * 12),
	Nature.statics.ground.upper.middle(blockSize * 64, height - blockSize * 12, blockSize * 12),
	Nature.statics.ground.vertical.left(blockSize * 77, height - blockSize * 20, blockSize * 8),
	Nature.statics.ground.inside(blockSize * 78, height - blockSize * 20, blockSize * 1, blockSize * 9),

	Nature.statics.ground.cornice.left(blockSize * 52, height - blockSize * 12),
	Nature.statics.ground.cornice.middle(blockSize * 53, height - blockSize * 12, blockSize),
	Nature.statics.ground.cornice.right(blockSize * 54, height - blockSize * 12),

	Nature.statics.ground.cornice.right(blockSize * 62, height - blockSize * 15),
	Nature.statics.ground.cornice.middle(blockSize * 59, height - blockSize * 15, blockSize * 3),
	Nature.statics.ground.down.middle(blockSize * 59, height - blockSize * 12, blockSize),
	Nature.statics.ground.inside(blockSize * 59, height - blockSize * 21, blockSize * 1, blockSize * 9),



	Nature.statics.ground.cornice.left(blockSize * 76, height - blockSize * 21),
	Nature.statics.ground.cornice.middle(blockSize * 77, height - blockSize * 21, blockSize * 1),

	Nature.statics.ground.cornice.left(blockSize * 82, height - blockSize * 17),
	Nature.statics.ground.cornice.middle(blockSize * 83, height - blockSize * 17, blockSize * 7),

	Nature.statics.ground.cornice.left(blockSize * 82, height - blockSize * 11),
	Nature.statics.ground.cornice.middle(blockSize * 83, height - blockSize * 11, blockSize * 7),

	Nature.statics.ground.cornice.middle(blockSize * 79, height - blockSize * 21, blockSize * 7),
	Nature.statics.ground.cornice.right(blockSize * 86, height - blockSize * 21),

	Nature.statics.ground.cornice.middle(blockSize * 79, height - blockSize * 14, blockSize * 7),
	Nature.statics.ground.cornice.right(blockSize * 86, height - blockSize * 14),

	Nature.statics.ground.vertical.right(blockSize * 79, height - blockSize * 20, blockSize * 16),

	Nature.statics.ground.cornice.right(blockSize * 71, height - blockSize * 18),
	Nature.statics.ground.cornice.middle(blockSize * 69, height - blockSize * 18, blockSize * 2),

	Nature.statics.ground.down.middle(blockSize * 69, height - blockSize * 15, blockSize),
	//Nature.statics.ground.inside(blockSize * 69, height - blockSize * 27, blockSize * 1, blockSize * 13),

	Nature.statics.ground.upper.left(blockSize * 77, height - blockSize * 21),
	Nature.statics.ground.upper.middle(blockSize * 78, height - blockSize * 21, blockSize * 1),
	Nature.statics.ground.upper.right(blockSize * 79, height - blockSize * 21),

	Nature.statics.ground.inside(blockSize * 60, height - blockSize * 27, blockSize * 9, blockSize * 6),
	Nature.statics.ground.down.middle(blockSize * 60, height - blockSize * 21, blockSize * 9),
	Nature.statics.ground.inside(blockSize * 69, height - blockSize * 27, blockSize * 21, blockSize * 1),
	Nature.statics.ground.down.middle(blockSize * 69, height - blockSize * 26, blockSize * 20),

	Nature.statics.ground.upper.left(blockSize * 59, height - blockSize * 28),
	Nature.statics.ground.upper.middle(blockSize * 60, height - blockSize * 28, blockSize * 110),

	Nature.statics.ground.vertical.left(blockSize * 89, height - blockSize * 25, blockSize * 13),
	Nature.statics.ground.inside(blockSize * 90, height - blockSize * 27, blockSize * 69, blockSize * 11),

	Nature.statics.ground.inside(blockSize * 79, height - blockSize * 3, blockSize * 1, blockSize * 3),
	Nature.statics.ground.inside(blockSize * 86, height - blockSize * 5, blockSize * 8, blockSize * 5),
	Nature.statics.ground.upper.right(blockSize * 80, height - blockSize * 4),
	Nature.statics.ground.vertical.right(blockSize * 80, height - blockSize * 3, blockSize * 3),

	Nature.statics.ground.down.right(blockSize * 80, height),

	Nature.statics.ground.upper.left(blockSize * 85, height - blockSize * 6),
	Nature.statics.ground.upper.middle(blockSize * 86, height - blockSize * 6, blockSize * 8),
	Nature.statics.ground.upper.right(blockSize * 94, height - blockSize * 6),
	Nature.statics.ground.vertical.left(blockSize * 85, height - blockSize * 5, blockSize * 5),
	Nature.statics.ground.vertical.right(blockSize * 94, height - blockSize * 5, blockSize * 5),
	Nature.statics.ground.down.left(blockSize * 85, height),
	Nature.statics.ground.down.middle(blockSize * 86, height, blockSize * 8),

	Nature.statics.ground.inside(blockSize * 90, height - blockSize * 16, blockSize * 4, blockSize * 5),
	Nature.statics.ground.inside(blockSize * 94, height - blockSize * 16, blockSize * 6, blockSize * 3),
	Nature.statics.ground.inside(blockSize * 100, height - blockSize * 16, blockSize * 2, blockSize * 4),
	Nature.statics.ground.inside(blockSize * 102, height - blockSize * 16, blockSize * 6, blockSize * 2),
	Nature.statics.ground.inside(blockSize * 108, height - blockSize * 16, blockSize * 2, blockSize * 3),
	Nature.statics.ground.inside(blockSize * 110, height - blockSize * 16, blockSize * 6, blockSize * 1),
	Nature.statics.ground.inside(blockSize * 116, height - blockSize * 16, blockSize * 2, blockSize * 2),

	Nature.statics.ground.cornice.left(blockSize * 99, height - blockSize * 8),
	Nature.statics.ground.cornice.middle(blockSize * 100, height - blockSize * 8, blockSize * 2),
	Nature.statics.ground.cornice.right(blockSize * 102, height - blockSize * 8),

	Nature.statics.ground.cornice.left(blockSize * 107, height - blockSize * 9),
	Nature.statics.ground.cornice.middle(blockSize * 108, height - blockSize * 9, blockSize * 2),
	Nature.statics.ground.cornice.right(blockSize * 110, height - blockSize * 9),

	Nature.statics.ground.cornice.left(blockSize * 115, height - blockSize * 10),
	Nature.statics.ground.cornice.middle(blockSize * 116, height - blockSize * 10, blockSize * 2),
	Nature.statics.ground.cornice.right(blockSize * 118, height - blockSize * 10),

	Nature.statics.ground.down.middle(blockSize * 89, height - blockSize * 11, blockSize * 5),
	Nature.statics.ground.down.right(blockSize * 94, height - blockSize * 11),

	Nature.statics.ground.down.left(blockSize * 99, height - blockSize * 12),
	Nature.statics.ground.down.middle(blockSize * 100, height - blockSize * 12, blockSize * 2),
	Nature.statics.ground.down.right(blockSize * 102, height - blockSize * 12),

	Nature.statics.ground.down.left(blockSize * 107, height - blockSize * 13),
	Nature.statics.ground.down.middle(blockSize * 108, height - blockSize * 13, blockSize * 2),
	Nature.statics.ground.down.right(blockSize * 110, height - blockSize * 13),

	Nature.statics.ground.down.left(blockSize * 115, height - blockSize * 14),
	Nature.statics.ground.down.middle(blockSize * 116, height - blockSize * 14, blockSize * 2),
	Nature.statics.ground.down.right(blockSize * 118, height - blockSize * 14),

	Nature.statics.ground.down.middle(blockSize * 95, height - blockSize * 13, blockSize * 4),
	Nature.statics.ground.down.middle(blockSize * 103, height - blockSize * 14, blockSize * 4),
	Nature.statics.ground.down.middle(blockSize * 111, height - blockSize * 15, blockSize * 4),

	Nature.statics.ground.vertical.right(blockSize * 94, height - blockSize * 12, blockSize * 1),
	Nature.statics.ground.vertical.right(blockSize * 102, height - blockSize * 13, blockSize * 1),
	Nature.statics.ground.vertical.right(blockSize * 110, height - blockSize * 14, blockSize * 1),
	Nature.statics.ground.vertical.right(blockSize * 118, height - blockSize * 15, blockSize * 1),

];

const loadGround = factory => {
	ground.forEach((el) => {
		const entity = new StaticItem({ ...el, factory, element: "ground" });
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);
	})
};

const water = [

	Nature.statics.water.up(blockSize * 0, height - blockSize * 3 - waterHeight, blockSize * 124),
	Nature.statics.water.inside(blockSize * 0, height - blockSize * 3, blockSize * 124, blockSize * 6),

];

const loadWater = factory => {
	water.forEach((el, idx) => {
		const entity = new WaterItem({ ...el, factory, element: "water" });
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
	const player = new Player({ left: 8000, top: 100, factory });
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