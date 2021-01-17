import React from 'react'
import GolemBg from '../../../../assets/sprite-sheets/enemy/little-golem.png';
//import GolemBg from '../../../../assets/sprite-sheets/player/player.png';
let once = false;

export default function Golem (props) {

  const [width, height] = props.size;
  const left = props.body.position.x;
  const top = props.body.position.y;
  const [bgx, bgy] = props.backgroundPosition;

  return (
    <div style={{
      position: "absolute",
      zIndex: 10,
      top: top,
      left: left,
      width: width,
      height: height,
      backgroundImage: `url(${GolemBg})`,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy,
      transform: `rotate(${props.angle}deg)`
    }} />
  )
}