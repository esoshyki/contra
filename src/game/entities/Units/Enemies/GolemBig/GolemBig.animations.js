import png from './GolemBig.png';

const asset = `url(${png})`;

const idle = [{
  slides: [
    { x: 0, y: -135, w: 150, h: 95, duration: 6 },
    { x: -150, y: -135, w: 150, h: 95, duration: 6 },
    { x: -300, y: -135, w: 150, h: 95, duration: 6 },
    { x: -450, y: -135, w: 150, h: 95, duration: 6 },
    { x: -600, y: -135, w: 150, h: 95, duration: 6 },
    { x: -750, y: -135, w: 150, h: 95, duration: 6 },
    { x: -900, y: -135, w: 150, h: 95, duration: 6 },
    { x: -1050, y: -135, w: 150, h: 95, duration: 6 },
    { x: -1200, y: -135, w: 150, h: 95, duration: 6 },
  ],
  isCycle: true,
  asset
}]

const move = [{
  slides: [
    { x: 0, y: -135, w: 150, h: 95, duration: 6 },
    { x: -150, y: -135, w: 150, h: 95, duration: 6 },
    { x: -300, y: -135, w: 150, h: 95, duration: 6 },
    { x: -450, y: -135, w: 150, h: 95, duration: 6 },
    { x: -600, y: -135, w: 150, h: 95, duration: 6 },
    { x: -750, y: -135, w: 150, h: 95, duration: 6 },
    { x: -900, y: -135, w: 150, h: 95, duration: 6 },
    { x: -1050, y: -135, w: 150, h: 95, duration: 6 },
    { x: -1200, y: -135, w: 150, h: 95, duration: 6 },
  ],
  isCycle: true,
  asset
}];

const jump = {
  slides: [
    { x: 0, y: -236, w: 170, h: 142, duration: 8 },
    { x: -300, y: -236, w: 150, h: 142, duration: 7 },
    { x: -450, y: -236, w: 150, h: 142, duration: 6 },
    { x: -600, y: -236, w: 150, h: 142, duration: 6 },
    { x: -750, y: -236, w: 150, h: 142, duration: 6 },
    { x: -900, y: -236, w: 150, h: 142, duration: 6 },
    { x: -1050, y: -236, w: 150, h: 142, duration: 7 },
    { x: -1200, y: -236, w: 150, h: 142, duration: 8 },
  ],
  isCycle: false,
  asset
};

const fall = {
  slides: [
    { x: 0, y: -236, w: 170, h: 142, duration: 8 },
    { x: -300, y: -236, w: 150, h: 142, duration: 7 },
    { x: -450, y: -236, w: 150, h: 142, duration: 6 },
    { x: -600, y: -236, w: 150, h: 142, duration: 6 },
    { x: -750, y: -236, w: 150, h: 142, duration: 6 },
    { x: -900, y: -236, w: 150, h: 142, duration: 6 },
    { x: -1050, y: -236, w: 150, h: 142, duration: 7 },
    { x: -1200, y: -236, w: 150, h: 142, duration: 8 },
  ],
  isCycle: true,
  asset
};

const jumpAnimattion = [
  jump, fall
]

const cast = [{
  slides: [
    { x: 0, y: -236, w: 170, h: 142, duration: 8 },
    { x: -300, y: -236, w: 150, h: 142, duration: 7 },
    { x: -450, y: -236, w: 150, h: 142, duration: 6 },
    { x: -600, y: -236, w: 150, h: 142, duration: 6 },
    { x: -750, y: -236, w: 150, h: 142, duration: 6 },
    { x: -900, y: -236, w: 150, h: 142, duration: 6 },
    { x: -1050, y: -236, w: 150, h: 142, duration: 7 },
    { x: -1200, y: -236, w: 150, h: 142, duration: 8 },
  ],
  isCycle: false,
  asset
}];



const idleFire = [{
  slides: [
    { x: 0, y: -236, w: 170, h: 142, duration: 8 },
    { x: -300, y: -236, w: 150, h: 142, duration: 7 },
    { x: -450, y: -236, w: 150, h: 142, duration: 6 },
    { x: -600, y: -236, w: 150, h: 142, duration: 6 },
    { x: -750, y: -236, w: 150, h: 142, duration: 6 },
    { x: -900, y: -236, w: 150, h: 142, duration: 6 },
    { x: -1050, y: -236, w: 150, h: 142, duration: 7 },
    { x: -1200, y: -236, w: 150, h: 142, duration: 8 },
  ],
  isCycle: true,
  asset
}];

export default {
  idle, move: move, jump, fall, jumpAnimattion, cast, idleFire
};


