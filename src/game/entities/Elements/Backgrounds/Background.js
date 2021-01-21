import { Render } from 'matter-js';
import Element from '../Element';
import Renderer from './Background.renderer';
import Matter from 'matter-js';

export default class BgElement extends Element {
  constructor(props) {
    super(props);
    this.body = Matter.Bodies.
    rectangle(props.left + props.width / 2, props.top + props.width / 2, 
              props.width, props.height, 
              { isSensor: true });
    this.perspective = props.perspective;
    this.left = props.left;
    this.top = props.top;
    this.bgx = props.bgx;
    this.bgy = props.bgy;
    this.type = "background";
    this.renderer = Renderer;
  }
}