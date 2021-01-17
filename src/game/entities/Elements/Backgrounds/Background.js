import { Render } from 'matter-js';
import Element from '../Element';
import Renderer from './Background.renderer';

export default class BgElement extends Element {
  constructor(props) {
    super(props);
    this.perspective = props.perspective;
    this.left = props.left;
    this.top = props.top;
    this.bgx = props.bgx;
    this.bgy = props.bgy;
    this.type = "background";
    this.renderer = Renderer;
  }
}