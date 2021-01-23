import Farm from './farm/farm';
import Nature from './nature/nature';
import StaticItem from '../../entities/Elements/Static';
import BgItem from '../../entities/Elements/Background';
import Player from '../../entities/Player/Player';
import WaterItem from '../../entities/Elements/Water';

const height = 800;
const defaultSize = Nature.defaultSize;
const levelWidth = defaultSize * 100;
const levelHeight = defaultSize * 10;
const floor = height - defaultSize * 5;


const backgrounds = [
	Farm.hills.element(0, height - defaultSize * 3 - Farm.hills.height, levelWidth)
	// Nature.backgrounds.trees.big(250, floor, 20),
	// Nature.backgrounds.bush.big.yellow(800, floor, 30),
	// Farm.houses.square(defaultSize * 10, height - defaultSize * 5, 200)
];

const loadBackgrounds = factory => {
	backgrounds.forEach((el, idx) => {
		const entity = new BgItem({ ...el, factory, element: "water" });
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);
	});
};

const ground = [

	Nature.statics.ground.upper.left(defaultSize * 0, height - defaultSize * 2),
	Nature.statics.ground.corner.left.vertical(0, height - defaultSize, defaultSize * 3),
	Nature.statics.ground.upper.middle(defaultSize * 1, height - defaultSize * 2, defaultSize * 2),
	// Nature.statics.ground.upper.right(defaultSize * 4, height - defaultSize * 6),
	Nature.statics.ground.corner.right.vertical(defaultSize * 5, height - defaultSize * 5, defaultSize * 7),

	Nature.statics.ground.inside.middle(defaultSize, height - defaultSize, defaultSize * 4, defaultSize * 3),

	Nature.statics.ground.ledge.left(defaultSize * 0, height + defaultSize * 2),
	Nature.statics.ground.ledge.middle(defaultSize * 1, height + defaultSize * 2, defaultSize * 4),



	Nature.statics.ground.upper.left(defaultSize * 10, height - defaultSize * 6),
	Nature.statics.ground.corner.left.vertical(defaultSize * 10, height - defaultSize * 5, defaultSize * 5),
	Nature.statics.ground.upper.middle(defaultSize * 11, height - defaultSize * 6, defaultSize * 3),
	Nature.statics.ground.upper.right(defaultSize * 14, height - defaultSize * 6),
	Nature.statics.ground.corner.right.vertical(defaultSize * 14, height - defaultSize * 5, defaultSize * 5),

	Nature.statics.ground.inside.middle(defaultSize * 11, height - defaultSize * 5, defaultSize * 3, defaultSize * 6),



];

const loadGround = factory => {
	ground.forEach((el) => {
		console.log('el')
		console.log(el)
		const entity = new StaticItem({ ...el, factory, element: "ground" });
		factory.addToBodies(entity.body);
		factory.addToEntities(entity);
	})
};

console.log('fdadfdfdafhadgiuad hguoida hug')
console.log(Nature.statics.water.inside(defaultSize * 0, height - defaultSize * 3, defaultSize * 25, defaultSize * 6))

const water = [

	Nature.statics.water.up(defaultSize * 0, height - defaultSize * 3 + 17, defaultSize * 25),
	Nature.statics.water.inside(defaultSize * 0, height - defaultSize * 3, defaultSize * 25, defaultSize * 6),


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
	const player = new Player({ left: 100, top: 100, factory });
	factory.entities.player = player;
	factory.addToBodies(player.body);
}


const setup = factory => {
	console.log(factory.entities);
	loadGround(factory);
	loadWater(factory);
	loadBackgrounds(factory);
	loadtTriggers(factory);
	loadPlayer(factory);
};

export default {
	setup: (factory) => setup(factory)
};