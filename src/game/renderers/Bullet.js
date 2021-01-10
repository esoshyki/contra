import React from 'react'
import PlayerBg from '../../assets/sprite-sheets/player/player.png';

export default function Person (props) {

  const [width, height] = props.size;
  const left = props.left;
  const top = props.top
  const [bgx, bgy] = props.backgroundPosition;

  return (
    <div style={{
      position: "absolute",
      zIndex: 10,
      top: top,
      left: left,
      width: width,
      height: height,
      backgroundImage: `url(${PlayerBg})`,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy,
    }} />
  )
}