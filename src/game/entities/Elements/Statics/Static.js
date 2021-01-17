import Element from '../Element';
import Renderer from './Static.renderer';

export default class StaticElement extends Element {
  constructor({asset, left, top, width, height, factory}) {
    super(asset, left, top, width, height, Renderer, factory)
  }
}