import Element from './Element';
import Matter from 'matter-js';
import categories from '../../constraints/colides';

export default class StaticElement extends Element {
  constructor(props) {
    super(props);
    this.body = Matter.Bodies.
                rectangle(props.left + props.width / 2, props.top + props.height / 2, 
                          props.width, props.height, 
                          { isStatic: true, density: 10 ** 10, collisionFilter: {
                            category: categories.static,
                            mask: categories.player | categories.enemy,
                            group: categories.static,
                     
                          } });
    this.type = "static";
    this.element = props.element;
    this.zIndex = 5;
  };
  
}