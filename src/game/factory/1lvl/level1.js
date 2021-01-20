import Farm from './farm/farm';
import Nature from './nature/nature';
import StaticItem from '../../entities/Elements/Statics/Static';
import BgItem from '../../entities/Elements/Backgrounds/Background';
import Player from '../../entities/Player/Player';
import WaterItem from '../../entities/Elements/Statics/Water';

const height = 800;
const defaultSize = Nature.defaultSize;
const floor = height - defaultSize * 5;


const backgrounds = [
	Nature.backgrounds.trees.big(250, floor, 20),
	Nature.backgrounds.bush.big.yellow(800, floor, 30),
	Farm.houses.square(defaultSize * 10, height - defaultSize * 5, 200)
];

const loadBackgrounds = factory => {
	backgrounds.forEach((el, idx) => {
		const entity = new BgItem({ ...el, factory, element: "water" });
		factory.backgrounds.push(entity);
		factory.game.entities[`background${idx}`] = entity;
	});
};

const ground = [

	Nature.statics.ground.ledge.left(defaultSize * 0, height),
	Nature.statics.ground.ledge.middle(defaultSize * 1, height),
	Nature.statics.ground.ledge.middle(defaultSize * 2, height),
	Nature.statics.ground.ledge.middle(defaultSize * 3, height),
	Nature.statics.ground.ledge.middle(defaultSize * 4, height),
	Nature.statics.ground.ledge.right(defaultSize * 5, height),

	Nature.statics.ground.inside.left(defaultSize * 0, height - defaultSize),
	Nature.statics.ground.inside.middle(defaultSize * 1, height - defaultSize),
	Nature.statics.ground.inside.middle(defaultSize * 2, height - defaultSize),
	Nature.statics.ground.inside.middle(defaultSize * 3, height - defaultSize),
	Nature.statics.ground.inside.middle(defaultSize * 4, height - defaultSize),
	Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize),

	Nature.statics.ground.inside.left(defaultSize * 0, height - defaultSize * 2),
	Nature.statics.ground.inside.middle(defaultSize * 1, height - defaultSize * 2),
	Nature.statics.ground.inside.middle(defaultSize * 2, height - defaultSize * 2),
	Nature.statics.ground.inside.middle(defaultSize * 3, height - defaultSize * 2),
	Nature.statics.ground.inside.middle(defaultSize * 4, height - defaultSize * 2),
	Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 2),

	Nature.statics.ground.inside.left(defaultSize * 0, height - defaultSize * 3),
	Nature.statics.ground.inside.middle(defaultSize * 1, height - defaultSize * 3),
	Nature.statics.ground.inside.middle(defaultSize * 2, height - defaultSize * 3),
	Nature.statics.ground.inside.middle(defaultSize * 3, height - defaultSize * 3),
	Nature.statics.ground.inside.middle(defaultSize * 4, height - defaultSize * 3),
	Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 3),

	Nature.statics.ground.upper.left(defaultSize * 9, height - defaultSize * 4),
	Nature.statics.ground.upper.middle(defaultSize * 10, height - defaultSize * 4),
	Nature.statics.ground.upper.middle(defaultSize * 11, height - defaultSize * 4),
	Nature.statics.ground.upper.middle(defaultSize * 12, height - defaultSize * 4),
	Nature.statics.ground.upper.right(defaultSize * 13, height - defaultSize * 4),


	Nature.statics.ground.inside.left(defaultSize * 9, height - defaultSize * 3),
	Nature.statics.ground.inside.middle(defaultSize * 10, height - defaultSize * 3),
	Nature.statics.ground.inside.middle(defaultSize * 11, height - defaultSize * 3),
	Nature.statics.ground.inside.middle(defaultSize * 12, height - defaultSize * 3),
	Nature.statics.ground.inside.right(defaultSize * 13, height - defaultSize * 3),

	Nature.statics.ground.inside.left(defaultSize * 9, height - defaultSize * 2),
	Nature.statics.ground.inside.middle(defaultSize * 10, height - defaultSize * 2),
	Nature.statics.ground.inside.middle(defaultSize * 11, height - defaultSize * 2),
	Nature.statics.ground.inside.middle(defaultSize * 12, height - defaultSize * 2),
	Nature.statics.ground.inside.right(defaultSize * 13, height - defaultSize * 2),

	Nature.statics.ground.inside.left(defaultSize * 9, height - defaultSize),
	Nature.statics.ground.inside.middle(defaultSize * 10, height - defaultSize),
	Nature.statics.ground.inside.middle(defaultSize * 11, height - defaultSize),
	Nature.statics.ground.inside.middle(defaultSize * 12, height - defaultSize),
	Nature.statics.ground.inside.right(defaultSize * 13, height - defaultSize),

	Nature.statics.ground.ledge.left(defaultSize * 9, height),
	Nature.statics.ground.ledge.middle(defaultSize * 10, height),
	Nature.statics.ground.ledge.middle(defaultSize * 11, height),
	Nature.statics.ground.ledge.middle(defaultSize * 12, height),
	Nature.statics.ground.ledge.right(defaultSize * 13, height),



	// Nature.statics.water.inside(defaultSize * 14, height),
	// Nature.statics.water.inside(defaultSize * 15, height),
	// Nature.statics.water.inside(defaultSize * 16, height),

	Nature.statics.ground.ledge.middle(defaultSize * 17, height),
	Nature.statics.ground.ledge.middle(defaultSize * 18, height),
	Nature.statics.ground.ledge.middle(defaultSize * 19, height),
	Nature.statics.ground.ledge.middle(defaultSize * 20, height),
	Nature.statics.ground.ledge.middle(defaultSize * 21, height),
	Nature.statics.ground.ledge.middle(defaultSize * 22, height),

	// Nature.statics.ground.inside.middle(defaultSize * 6, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 7, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 8, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 9, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 10, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 11, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 12, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 13, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 14, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 15, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 16, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 17, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 18, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 19, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 20, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 21, height - defaultSize),
	// Nature.statics.ground.inside.middle(defaultSize * 22, height - defaultSize),



	Nature.statics.ground.upper.left(0, height - defaultSize * 4),
	Nature.statics.ground.upper.middle(defaultSize, height - defaultSize * 4),
	Nature.statics.ground.upper.middle(defaultSize * 2, height - defaultSize * 4),
	Nature.statics.ground.corner.left.horisontal(defaultSize * 3, height - defaultSize * 4),
	Nature.statics.ground.corner.left.corner(defaultSize * 4, height - defaultSize * 4),
	Nature.statics.ground.corner.left.vertical(defaultSize * 4, height - defaultSize * 5),
	Nature.statics.ground.inside.left(defaultSize * 4, height - defaultSize * 6),
	Nature.statics.ground.upper.left(defaultSize * 4, height - defaultSize * 7),
	Nature.statics.ground.upper.right(defaultSize * 5, height - defaultSize * 7),
	Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 6),
	Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 5),
	Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 4),









	Nature.statics.ground.cornice.left(defaultSize * 18, height - defaultSize * 2),
	Nature.statics.ground.cornice.right(defaultSize * 19, height - defaultSize * 2),

	Nature.statics.ground.cornice.left(defaultSize * 22, height - defaultSize * 2),
	Nature.statics.ground.cornice.right(defaultSize * 23, height - defaultSize * 2),

	Nature.statics.ground.cornice.left(defaultSize * 26, height - defaultSize * 2),
	Nature.statics.ground.cornice.right(defaultSize * 27, height - defaultSize * 2),
];

const loadGround = factory => {
	ground.forEach((el, idx) => {
		const entity = new StaticItem({ ...el, factory, element: "ground" });
		factory.statics.push(entity);
		factory.game.entities[`ground${idx}`] = entity;
	})
};

const water = [



	Nature.statics.water.up(defaultSize * 5, height - defaultSize * 4),
	Nature.statics.water.up(defaultSize * 6, height - defaultSize * 4),
	Nature.statics.water.up(defaultSize * 7, height - defaultSize * 4),
	Nature.statics.water.up(defaultSize * 8, height - defaultSize * 4),
	Nature.statics.water.up(defaultSize * 9, height - defaultSize * 4),

	Nature.statics.water.inside(defaultSize * 5, height - defaultSize * 3),
	Nature.statics.water.inside(defaultSize * 6, height - defaultSize * 3),
	Nature.statics.water.inside(defaultSize * 7, height - defaultSize * 3),
	Nature.statics.water.inside(defaultSize * 8, height - defaultSize * 3),
	Nature.statics.water.inside(defaultSize * 9, height - defaultSize * 3),

	Nature.statics.water.inside(defaultSize * 5, height - defaultSize * 2),
	Nature.statics.water.inside(defaultSize * 6, height - defaultSize * 2),
	Nature.statics.water.inside(defaultSize * 7, height - defaultSize * 2),
	Nature.statics.water.inside(defaultSize * 8, height - defaultSize * 2),
	Nature.statics.water.inside(defaultSize * 9, height - defaultSize * 2),

	Nature.statics.water.inside(defaultSize * 5, height - defaultSize),
	Nature.statics.water.inside(defaultSize * 6, height - defaultSize),
	Nature.statics.water.inside(defaultSize * 7, height - defaultSize),
	Nature.statics.water.inside(defaultSize * 8, height - defaultSize),
	Nature.statics.water.inside(defaultSize * 9, height - defaultSize),

	Nature.statics.water.inside(defaultSize * 5, height),
	Nature.statics.water.inside(defaultSize * 6, height),
	Nature.statics.water.inside(defaultSize * 7, height),
	Nature.statics.water.inside(defaultSize * 8, height),
	Nature.statics.water.inside(defaultSize * 9, height),




	Nature.statics.water.up(defaultSize * 13, height - defaultSize),
	Nature.statics.water.up(defaultSize * 14, height - defaultSize),
	Nature.statics.water.up(defaultSize * 15, height - defaultSize),
	Nature.statics.water.up(defaultSize * 16, height - defaultSize),
	Nature.statics.water.up(defaultSize * 17, height - defaultSize),
	Nature.statics.water.up(defaultSize * 18, height - defaultSize),
	Nature.statics.water.up(defaultSize * 19, height - defaultSize),
	Nature.statics.water.up(defaultSize * 20, height - defaultSize),
	Nature.statics.water.up(defaultSize * 21, height - defaultSize),
	Nature.statics.water.up(defaultSize * 22, height - defaultSize),
	Nature.statics.water.up(defaultSize * 23, height - defaultSize),
	Nature.statics.water.up(defaultSize * 24, height - defaultSize),
	Nature.statics.water.up(defaultSize * 25, height - defaultSize),
	Nature.statics.water.up(defaultSize * 26, height - defaultSize),
	Nature.statics.water.up(defaultSize * 27, height - defaultSize),
	Nature.statics.water.up(defaultSize * 28, height - defaultSize),
	Nature.statics.water.up(defaultSize * 29, height - defaultSize),
	Nature.statics.water.up(defaultSize * 30, height - defaultSize),
	Nature.statics.water.up(defaultSize * 31, height - defaultSize),
	Nature.statics.water.up(defaultSize * 32, height - defaultSize),
	Nature.statics.water.up(defaultSize * 33, height - defaultSize),
	Nature.statics.water.up(defaultSize * 34, height - defaultSize),
];

const loadWater = factory => {
	water.forEach((el, idx) => {
		const entity = new WaterItem({ ...el, factory, element: "water" });
		factory.statics.push(entity);
		factory.game.entities[`water${idx}`] = entity;
	})
};

const loadtTriggers = (factory) => {
	factory.triggers = [
		{
			condition: factory => factory.player.body.position.x >= 200 && factory.triggers[0].done === false,
			action: (factory, x, y) => factory.addBird(1500, 200),
			done: false,
		},
		{
			condition: factory => factory.player.body.position.x >= 600 && factory.triggers[1].done === false,
			action: (factory, x, y) => factory.addGolem(1000, 500),
			done: false,
		},
	]
};


const setup = factory => {
	loadGround(factory);
	loadWater(factory);
	loadBackgrounds(factory);
	loadtTriggers(factory);
};

export default {
	setup: (factory) => setup(factory)
};