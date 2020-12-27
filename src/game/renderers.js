import React, { useRef } from "react";
import player1sprite from '../assets/sprite-sheets/player1.gif'


const Box = (props) => {

  const sizex = 80;
  const sizey = 125
  const x = props.x - sizex / 2;
  const y = props.y - sizey / 2;
  const backgroundX = props.backgroundX
  const backgroundY = props.backgroundY;
  
  return (
    <div 
      className={props.action + props.addClass || "stay-right"}
      style={{ 
      position: "absolute", 
      width: sizex, 
      height: sizey, 
      backgroundImage: `url(${player1sprite})`,
      backgroundPositionX: backgroundX,
      backgroundPositionY: backgroundY,
      backgroundSize: 1000,
      backgroundRepeat: "no-repeat",
      left: x, 
      top: y,
      }} />
  );
}
 
export { Box };