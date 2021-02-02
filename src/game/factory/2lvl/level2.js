import Farm from './farm/farm';
import Nature from './nature/nature';
import StaticItem from '../../entities/Elements/Static';
import BgItem from '../../entities/Elements/Background';
import Player from '../../entities/Units/Player/Player';
import WaterItem from '../../entities/Elements/Water';

const blockSize = Nature.blockSize;
const waterHeight = Nature.waterHeight;
const corniceHeight = Nature.corniceHeight;
const levelWidth = blockSize * 100;
const levelHeight = blockSize * 30;
const height = levelHeight;
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

Nature.statics.ground.upper.roundLeft(blockSize * 5, height - blockSize * 7), 
Nature.statics.ground.upper.roundRight(blockSize * 5, height - blockSize * 7), 

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
	Nature.statics.ground.upper.middle(blockSize * 1, height - blockSize * 4, blockSize * 6),
	Nature.statics.ground.upper.middle(blockSize * 7, height - blockSize * 6, blockSize * 4),
	Nature.statics.ground.upper.middle(blockSize * 11, height - blockSize * 8, blockSize * 1),

	Nature.statics.ground.inside(blockSize * 0, height - blockSize * 3, blockSize * 7, blockSize * 3),
	Nature.statics.ground.inside(blockSize * 7, height - blockSize * 5, blockSize * 5, blockSize * 5),
	Nature.statics.ground.inside(blockSize * 11, height - blockSize * 7, blockSize * 1, blockSize * 2),

	Nature.statics.ground.down.middle(blockSize * 0, height, blockSize * 12),

	Nature.statics.ground.upper.roundLeft(blockSize * 6, height - blockSize * 6),
	Nature.statics.ground.upper.roundLeft(blockSize * 10, height - blockSize * 8),
	Nature.statics.ground.upper.roundRight(blockSize * 12, height - blockSize * 8),

	Nature.statics.ground.cornice.left(blockSize * 17, height - blockSize * 8),
	Nature.statics.ground.cornice.middle(blockSize * 18, height - blockSize * 8, blockSize * 2),
	Nature.statics.ground.cornice.right(blockSize * 20, height - blockSize * 8),

	Nature.statics.ground.upper.once(blockSize * 16, height - blockSize * 2),
	Nature.statics.ground.upper.once(blockSize * 20, height - blockSize * 2),

	Nature.statics.ground.inside(blockSize * 25, height - blockSize * 3, blockSize * 2, blockSize * 3),
	Nature.statics.ground.inside(blockSize * 27, height - blockSize * 5, blockSize * 2, blockSize * 5),
	Nature.statics.ground.inside(blockSize * 29, height - blockSize * 4, blockSize * 3, blockSize * 4),
	Nature.statics.ground.inside(blockSize * 32, height - blockSize * 3, blockSize * 10, blockSize * 3),
	Nature.statics.ground.upper.roundLeft(blockSize * 24, height - blockSize * 4),
	Nature.statics.ground.upper.roundLeft(blockSize * 26, height - blockSize * 6),
	Nature.statics.ground.upper.right(blockSize * 28, height - blockSize * 6),
	Nature.statics.ground.upper.right(blockSize * 31, height - blockSize * 5),
	Nature.statics.ground.upper.middle(blockSize * 25, height - blockSize * 4, blockSize * 2),
	Nature.statics.ground.upper.middle(blockSize * 27, height - blockSize * 6, blockSize * 1),
	Nature.statics.ground.upper.middle(blockSize * 29, height - blockSize * 5, blockSize * 2),
	Nature.statics.ground.upper.middle(blockSize * 32, height - blockSize * 4, blockSize * 10),
	Nature.statics.ground.down.middle(blockSize * 25, height, blockSize * 17),
	Nature.statics.ground.upper.roundRight(blockSize * 42, height - blockSize * 4),


	Nature.statics.ground.upper.roundLeft(blockSize * 47, height - blockSize * 3),
	Nature.statics.ground.upper.left(blockSize * 52, height - blockSize * 4),
	Nature.statics.ground.upper.roundRight(blockSize * 53, height - blockSize * 4),
	Nature.statics.ground.upper.middle(blockSize * 48, height - blockSize * 3, blockSize * 4),
	Nature.statics.ground.inside(blockSize * 48, height - blockSize * 2, blockSize * 5, blockSize * 2),
	Nature.statics.ground.inside(blockSize * 52, height - blockSize * 3, blockSize * 1, blockSize * 1),
	Nature.statics.ground.down.middle(blockSize * 48, height, blockSize * 5),

	Nature.statics.ground.upper.once(blockSize * 58, height - blockSize * 6),

	Nature.statics.ground.upper.roundLeft(blockSize * 64, height - blockSize * 5),
	Nature.statics.ground.upper.roundRight(blockSize * 72, height - blockSize * 4),
	Nature.statics.ground.upper.right(blockSize * 67, height - blockSize * 5),
	Nature.statics.ground.upper.middle(blockSize * 65, height - blockSize * 5, blockSize * 2),
	Nature.statics.ground.upper.middle(blockSize * 68, height - blockSize * 4, blockSize * 4),
	Nature.statics.ground.inside(blockSize * 65, height - blockSize * 4, blockSize * 3, blockSize * 4),
	Nature.statics.ground.inside(blockSize * 68, height - blockSize * 3, blockSize * 4, blockSize * 3),
	Nature.statics.ground.down.middle(blockSize * 65, height, blockSize * 7),


	Nature.statics.ground.upper.roundInnerLeft(blockSize * 70, height - blockSize * 8),
	Nature.statics.ground.upper.roundInnerRight(blockSize * 79, height - blockSize * 10),
	Nature.statics.ground.upper.left(blockSize * 71, height - blockSize * 9),
	Nature.statics.ground.upper.left(blockSize * 72, height - blockSize * 10),
	Nature.statics.ground.upper.middle(blockSize * 73, height - blockSize * 10, blockSize * 6),
	Nature.statics.ground.inside(blockSize * 71, height - blockSize * 8, blockSize * 1, blockSize * 1),
	Nature.statics.ground.inside(blockSize * 72, height - blockSize * 9, blockSize * 1, blockSize * 1),

	Nature.statics.ground.upper.roundLeft(blockSize * 78, height - blockSize * 4),
	Nature.statics.ground.upper.roundRight(blockSize * 81, height - blockSize * 4),
	Nature.statics.ground.upper.middle(blockSize * 79, height - blockSize * 4, blockSize * 2),
	Nature.statics.ground.inside(blockSize * 79, height - blockSize * 3, blockSize * 2, blockSize * 3),
	Nature.statics.ground.down.middle(blockSize * 79, height, blockSize * 2),

	Nature.statics.ground.upper.roundLeft(blockSize * 87, height - blockSize * 4),
	Nature.statics.ground.upper.roundLeft(blockSize * 90, height - blockSize * 7),
	Nature.statics.ground.upper.roundLeft(blockSize * 93, height - blockSize * 10),
	Nature.statics.ground.upper.roundRight(blockSize * 95, height - blockSize * 10),
	Nature.statics.ground.upper.middle(blockSize * 88, height - blockSize * 4, blockSize * 3),
	Nature.statics.ground.upper.middle(blockSize * 91, height - blockSize * 7, blockSize * 3),
	Nature.statics.ground.upper.middle(blockSize * 94, height - blockSize * 10, blockSize * 1),
	Nature.statics.ground.inside(blockSize * 88, height - blockSize * 3, blockSize * 7, blockSize * 3),
	Nature.statics.ground.inside(blockSize * 91, height - blockSize * 6, blockSize * 4, blockSize * 3),
	Nature.statics.ground.inside(blockSize * 94, height - blockSize * 9, blockSize * 1, blockSize * 3),
	Nature.statics.ground.down.middle(blockSize * 88, height, blockSize * 7),

	Nature.statics.ground.cornice.left(blockSize * 100, height - blockSize * 10),
	Nature.statics.ground.cornice.middle(blockSize * 101, height - blockSize * 10, blockSize * 3),
	Nature.statics.ground.cornice.right(blockSize * 104, height - blockSize * 10),

	Nature.statics.ground.upper.roundLeft(blockSize * 108, height - blockSize * 13),
	Nature.statics.ground.upper.roundRight(blockSize * 112, height - blockSize * 13),
	Nature.statics.ground.upper.middle(blockSize * 109, height - blockSize * 13, blockSize * 3),

	Nature.statics.ground.upper.roundLeft(blockSize * 119, height - blockSize * 11),
	Nature.statics.ground.upper.roundRight(blockSize * 124, height - blockSize * 11),
	Nature.statics.ground.upper.middle(blockSize * 120, height - blockSize * 11, blockSize * 4),
	Nature.statics.ground.upper.middle(blockSize * 112, height - blockSize * 9, blockSize * 8),
	Nature.statics.ground.inside(blockSize * 109, height - blockSize * 12, blockSize * 3, blockSize * 4),
	Nature.statics.ground.inside(blockSize * 109, height - blockSize * 8, blockSize * 15, blockSize * 8),
	Nature.statics.ground.inside(blockSize * 120, height - blockSize * 10, blockSize * 4, blockSize * 2),
	Nature.statics.ground.down.middle(blockSize * 109, height, blockSize * 15),

	Nature.statics.ground.upper.roundLeft(blockSize * 130, height - blockSize * 11),
	Nature.statics.ground.upper.roundLeft(blockSize * 134, height - blockSize * 13),
	Nature.statics.ground.upper.roundLeft(blockSize * 138, height - blockSize * 15),
	Nature.statics.ground.upper.roundRight(blockSize * 143, height - blockSize * 4),
	Nature.statics.ground.upper.roundInnerRight(blockSize * 142, height - blockSize * 15),
	Nature.statics.ground.upper.middle(blockSize * 131, height - blockSize * 11, blockSize * 4),
	Nature.statics.ground.upper.middle(blockSize * 135, height - blockSize * 13, blockSize * 4),
	Nature.statics.ground.upper.middle(blockSize * 139, height - blockSize * 15, blockSize * 3),
	Nature.statics.ground.upper.middle(blockSize * 140, height - blockSize * 4, blockSize * 3),
	Nature.statics.ground.inside(blockSize * 131, height - blockSize * 10, blockSize * 9, blockSize * 10),
	Nature.statics.ground.inside(blockSize * 135, height - blockSize * 12, blockSize * 5, blockSize * 2),
	Nature.statics.ground.inside(blockSize * 139, height - blockSize * 14, blockSize * 1, blockSize * 2),
	Nature.statics.ground.inside(blockSize * 140, height - blockSize * 3, blockSize * 3, blockSize * 3),
	Nature.statics.ground.down.middle(blockSize * 131, height, blockSize * 12),

	Nature.statics.ground.upper.roundInnerLeft(blockSize * 142, height - blockSize * 11),
	Nature.statics.ground.upper.roundInnerLeft(blockSize * 145, height - blockSize * 15),
	Nature.statics.ground.upper.middle(blockSize * 143, height - blockSize * 11, blockSize * 6),
	Nature.statics.ground.upper.middle(blockSize * 146, height - blockSize * 15, blockSize * 4),
	Nature.statics.ground.inside(blockSize * 149, height - blockSize * 20, blockSize * 1, blockSize * 10),

	Nature.statics.ground.upper.roundLeft(blockSize * 147, height - blockSize * 7),
	Nature.statics.ground.upper.middle(blockSize * 148, height - blockSize * 7, blockSize * 17),
	Nature.statics.ground.inside(blockSize * 148, height - blockSize * 6, blockSize * 17, blockSize * 6),
	Nature.statics.ground.down.middle(blockSize * 148, height, blockSize * 22),

	Nature.statics.ground.inside(blockSize * 164, height - blockSize * 25, blockSize * 5, blockSize * 25),

	Nature.statics.ground.inside(blockSize * 0, height - blockSize * 19, blockSize * 90, blockSize * 5),
	Nature.statics.ground.inside(blockSize * 87, height - blockSize * 23, blockSize * 46, blockSize * 5),
	Nature.statics.ground.inside(blockSize * 133, height - blockSize * 25, blockSize * 39, blockSize * 5),

];

const loadGround = factory => {
	ground.forEach((el) => {
		const entity = new StaticItem({ ...el, factory, element: "ground" });
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);
	})
};

const water = [

	Nature.statics.water.up(blockSize * 0, height - blockSize * 1 - waterHeight, blockSize * 168),
	Nature.statics.water.inside(blockSize * 0, height - blockSize * 1, blockSize * 168, blockSize * 6),

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
			condition: factory => factory.entities.player.body.position.x >= blockSize * 17 && factory.triggers[0].done === false,
			action: (factory) => factory.addBat.call(factory, blockSize * 27, height - blockSize * 10),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 3 && factory.triggers[1].done === false,
			action: (factory) => factory.addGolemBig.call(factory, blockSize * 7, height - blockSize * 7, {
				from: blockSize * 5,
				to: blockSize * 8
			}),
			done: false,
		},

		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 3 && factory.triggers[2].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 11, height - blockSize * 14),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 9 && factory.triggers[3].done === false,
			action: (factory) => factory.addGolemBig.call(factory, blockSize * 20, height - blockSize * 9, {
				from: blockSize * 17,
				to: blockSize * 20
			}),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 15 && factory.triggers[4].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 20, height - blockSize * 7),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 30 && factory.triggers[5].done === false,
			action: (factory) => factory.addGolemBig.call(factory, blockSize * 41, height - blockSize * 5, {
				from: blockSize * 32,
				to: blockSize * 41
			}),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 35 && factory.triggers[6].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 44, height - blockSize * 14),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 40 && factory.triggers[7].done === false,
			action: (factory) => factory.addGolemBig.call(factory, blockSize * 50, height - blockSize * 4, {
				from: blockSize * 46,
				to: blockSize * 50
			}),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 51 && factory.triggers[8].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 55, height - blockSize * 14),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 50 && factory.triggers[9].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 60, height - blockSize * 14),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 60 && factory.triggers[10].done === false,
			action: (factory) => factory.addBat.call(factory, blockSize * 69, height - blockSize * 10),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 67 && factory.triggers[11].done === false,
			action: (factory) => factory.addGolemBig.call(factory, blockSize * 78, height - blockSize * 11, {
				from: blockSize * 72,
				to: blockSize * 78
			}),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 64 && factory.triggers[12].done === false,
			action: (factory) => factory.addGolemBig.call(factory, blockSize * 71, height - blockSize * 5, {
				from: blockSize * 68,
				to: blockSize * 71
			}),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 70 && factory.triggers[13].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 75, height - blockSize * 8),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 71 && factory.triggers[14].done === false,
			action: (factory) => factory.addBat.call(factory, blockSize * 85, height - blockSize * 12),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 85 && factory.triggers[15].done === false,
			action: (factory) => factory.addGolemBig.call(factory, blockSize * 92, height - blockSize * 8, {
				from: blockSize * 89,
				to: blockSize * 92
			}),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 88 && factory.triggers[16].done === false,
			action: (factory) => factory.addGolemBig.call(factory, blockSize * 92, height - blockSize * 8, {
				from: blockSize * 92,
				to: blockSize * 94
			}),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 93 && factory.triggers[17].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 97, height - blockSize * 17),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 108 && factory.triggers[18].done === false,
			action: (factory) => factory.addBat.call(factory, blockSize * 115, height - blockSize * 15),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 110 && factory.triggers[19].done === false,
			action: (factory) => factory.addGolemBig.call(factory, blockSize * 117, height - blockSize * 10, {
				from: blockSize * 112,
				to: blockSize * 117
			}),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 122 && factory.triggers[20].done === false,
			action: (factory) => factory.addBat.call(factory, blockSize * 131, height - blockSize * 15),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 128 && factory.triggers[21].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 132, height - blockSize * 17),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 137 && factory.triggers[22].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 143, height - blockSize * 19),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= blockSize * 142 && factory.triggers[23].done === false,
			action: (factory) => factory.addSpider.call(factory, blockSize * 143, height - blockSize * 9),
			done: false,
		},
		{
			condition: factory => factory.entities.player.body.position.x >= 11300 && factory.triggers[24].done === false,
			action: (factory) => {
				factory.addBoss2.call(factory, 11800, height - blockSize * 10);
				factory.fixCamera.call(factory, 11000, height - blockSize * 16);
			},
			done: false,
		},
	]
};

const setup = factory => {
	loadGround(factory);
	loadWater(factory);
	loadBackgrounds(factory);
	loadtTriggers(factory);
	return {
		levelWidth, levelHeight, playerStart: {
			x: 200,
			y: height - blockSize * 7
		}
	}
};

export default {
	setup: (factory) => setup(factory)
};