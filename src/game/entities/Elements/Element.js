class Element {
  constructor(asset, left, top, width, height, renderer, factory) {
    this.body = Matter.Bodies.rectangle(left, top, width, height, { isStatic: true, density: 10 ** 10 });
    this.size = [width, height];
    this.left = left;
    this.asset = asset;
    this.renderer = renderer;
  };
};

export default Element;
