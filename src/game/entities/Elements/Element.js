import Matter from 'matter-js';

class Element {
  constructor({asset, left, top, width, height, renderer}) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.top = top;
    this.asset = asset;
    this.renderer = renderer;
  };
};

export default Element;
