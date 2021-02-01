import png from './quad.png';

const asset = `url(${png})`;

const damage = [{
  slides: [
    {x: 4, y: -2, w: 45, h: 45, duration: 5},
    {x: -40, y: -2, w: 45, h: 45, duration: 5},
    {x: -85, y: -2, w: 45, h: 45, duration: 5},
  ],
    isCycle: true,
    asset
}];

export default damage