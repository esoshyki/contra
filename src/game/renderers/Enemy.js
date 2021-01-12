import React from 'react';
import enemy1bg from '../../assets/sprite-sheets/enemy/enemy1.gif';

export default function Enemy (props) {

  const getBg = _ => {
    switch (props.type) {
      case "enemy1":
        return `url(${enemy1bg})`;
      default:
        return `url(${enemy1bg})`;
      }
    
  }

  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const background = getBg();

  return (
    <div style={{
      position: "absolute",
      zIndex: 7,
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: background,
      backgroundSize: "cover",
      borderRadius: width / 2,
      
    }} />
  )
}