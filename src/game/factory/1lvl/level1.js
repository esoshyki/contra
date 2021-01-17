import Background from './background/background';
import Nature from './nature/nature';
import StaticItem from '../../entities/Elements/Statics/Static';
import BgItem from '../../entities/Elements/Backgrounds/Background';
import Player from '../../entities/Player/Player';

const height = 800;
const defaultSize = Nature.defaultSize;
const floor = height - defaultSize;


const backgrounds = [
    Nature.backgrounds.trees.big(250, floor, 20),
    Nature.backgrounds.bush.big.yellow(500, floor, 30)
]

const loadBackgrounds = factory => {
	backgrounds.forEach((el, idx) => {
		const entity = new BgItem({...el, factory, element: "water"});
		factory.backgrounds.push(entity);
		factory.game.entities[`background${idx}`] = entity;
	})
}

const ground = [
	Nature.statics.ground.upper.left(0, height),
	Nature.statics.ground.upper.middle(defaultSize, height),
	Nature.statics.ground.upper.middle(defaultSize * 2, height),
	Nature.statics.ground.corner.left.horisontal(defaultSize * 3, height),
	Nature.statics.ground.corner.left.corner(defaultSize * 4, height),
	Nature.statics.ground.corner.left.vertical(defaultSize * 4, height - defaultSize),
	Nature.statics.ground.inside.left(defaultSize * 4, height - defaultSize * 2),
	Nature.statics.ground.upper.left(defaultSize * 4, height - defaultSize * 3),
	Nature.statics.ground.upper.right(defaultSize * 5, height - defaultSize * 3),
	Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 2),	
	Nature.statics.ground.inside.right(defaultSize * 5, height - defaultSize * 1),	
	Nature.statics.ground.inside.right(defaultSize * 5, height),

	Nature.statics.ground.upper.left(defaultSize * 9, height),
	Nature.statics.ground.upper.middle(defaultSize * 10, height),
	Nature.statics.ground.upper.middle(defaultSize * 11, height),
	Nature.statics.ground.upper.middle(defaultSize * 12, height),
	Nature.statics.ground.upper.right(defaultSize * 13, height),
]

const loadGround = factory => {
	ground.forEach((el, idx) => {
		const entity = new StaticItem({...el, factory, element: "ground"});
		factory.statics.push(entity);
		factory.game.entities[`ground${idx}`] = entity;
	})
}

const water = [
	Nature.statics.water.up(defaultSize * 6, height),
	Nature.statics.water.up(defaultSize * 7, height),
	Nature.statics.water.up(defaultSize * 8, height),
	Nature.statics.water.up(defaultSize * 14, height),
	Nature.statics.water.up(defaultSize * 15, height),
	Nature.statics.water.up(defaultSize * 16, height),
	Nature.statics.water.up(defaultSize * 17, height),
]

const loadWater = factory => {
	water.forEach((el, idx) => {
		const entity = new StaticItem({...el, factory, element: "water"});
		factory.statics.push(entity);
		factory.game.entities[`water${idx}`] = entity;
	})
}


const setup = factory => {
	loadGround(factory);
	loadWater(factory);
	loadBackgrounds(factory);
}

export default {
	setup: (factory) => setup(factory)
}