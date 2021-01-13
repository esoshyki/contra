import Country from './background/Country/Country';

const floor = 760;

const backgrounds = [
    Country.arc1(0, 760),
    Country.arc1(400, 760),
    Country.houses(800, 760, "square"),
    Country.tower(1100, 760, "small"),
    Country.stackOfHay(400, 760),
    Country.scultpure(250, floor),
    Country.houses(1500, floor, "noWalls"),
    Country.hills(0, floor + 40)
]

console.log(backgrounds);

const statics = [
    { asset: "box", left: 0, top: 200, width: 40, height: 40},
    { asset: "floor1", left: 0, top: 780, width: 4800, height: 40 },
    { asset: "box", left: 360, top: 580, width: 40, height: 40 },
    { asset: "box", left: 400, top: 580, width: 40, height: 40 },
    { asset: "box", left: 440, top: 580, width: 40, height: 40 },
    { asset: "box", left: 480, top: 580, width: 40, height: 40 },
    { asset: "box", left: 760, top: 580, width: 40, height: 40 },
    { asset: "box", left: 800, top: 580, width: 40, height: 40 },
    { asset: "box", left: 840, top: 580, width: 40, height: 40 },
    { asset: "box", left: 880, top: 580, width: 40, height: 40 },
];

export default {
    statics, backgrounds
}