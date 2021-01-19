import Element from '../Element';
import Renderer from './Static.renderer';
import Matter from 'matter-js';

export default class StaticElement extends Element {
  constructor(props) {
    super(props);
    this.body = Matter.Bodies.
                rectangle(props.left + props.width / 2, props.top + props.width / 2, 
                          props.width, props.height, 
                          { isStatic: true, density: 10 ** 10 });
    this.type = "static";
    this.element = props.element;
    this.bgx = props.bgx;
    this.bgy = props.bgy;
    this.renderer = Renderer;
    this.zIndex = 5;
    console.log(this);
  }
}