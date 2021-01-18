export default class Effect {
  constructor({centerX, centerY, unit, width, height, animation, bgx, bgy, asset}) {
    this.unit = unit;
    this.width = width;
    this.height = height;
    this.centerx = centerX;
    this.centery = centerY;
    this.bgx = bgx;
    this.bgy = bgy;
    this.animation = {
      slides: animation.slides,
      isCycle: animation.isCycle,
      frameIdx: 0,
      durationIdx: 0,
    };
    this.asset = asset;
  };

  remove = () => {
    this.unit.effect = null
  };

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