import png from './bang.png';
import Effect from '../Effect';
import sound from './bang.wav';

const asset = `url(${png})`;

const animation = {
  slides: [
    { x: -763, y: -369, w: 200, h: 181, duration: 5 },
    { x: -64, y: -131, w: 257, h: 172, duration: 5 },
    { x: -322, y: -139, w: 194, h: 172, duration: 5 },
    { x: -516, y: -125, w: 254, h: 211, duration: 5 },
    { x: -779, y: -137, w: 178, h: 211, duration: 5 },
  ],
  isCycle: false
};

export default class Bang extends Effect {
  constructor({centerX, centerY, factory}) {
    super({
      centerX,
      centerY, 
      width: animation.slides[0].w,
      height: animation.slides[0].h,
      animation,
      bgx: animation.slides[0].x,
      bgy: animation.slides[0].y,
      asset,
      factory: factory,
    })
    this.audio = new Audio(sound);
    this.audio.play();
  }
}