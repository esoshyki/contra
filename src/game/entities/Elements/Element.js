import Matter from 'matter-js';

class Element {
  constructor({asset, left, top, width, height, renderer, bgx, bgy}) {
    this.size = [width, height];
    this.left = left;
    this.top = top;
    this.asset = asset;
    this.renderer = renderer;
    this.bgx = bgx;
    this.bgy = bgy;
  };
};

export default Element;
