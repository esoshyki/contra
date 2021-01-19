export default class Effect {
  constructor({top, left, width, height, animation, bgx, bgy, asset, factory, idx}) {
    this.width = width;
    this.height = height;
    this.top = top;
    this.left = left;
    this.bgx = bgx;
    this.bgy = bgy;
    this.animation = {
      slides: animation.slides,
      isCycle: animation.isCycle,
      frameIdx: 0,
      durationIdx: 0,
    };
    this.asset = asset;
    this.factory = factory;
    this.idx = idx;
  };

  remove = () => delete this.factory.game.entities[this.idx];

  animate = () => {
    const { slides, isCycle, frameIdx, durationIdx } = this.animation;
    const frame = slides[frameIdx];
    const { w, h, x, y, duration } = frame;
    this.bgx = x;
    this.bgy = y;
    this.width = w;
    this.height = h;
    if ( durationIdx < duration) {
      this.animation.durationIdx += 1;
    } else {
      this.animation.durationIdx = 0;
      if (slides[frameIdx + 1]) {
        this.animation.frameIdx += 1;
        this.animation.durationIdx = 0;
      } else {
        if (isCycle) {
          this.animation.frameIdx = 0;
          this.animation.durationIdx = 0;
        } else {
          this.remove();
          this.unit.remove();
        };
      };
    };
  };
};