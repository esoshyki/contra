import React from 'react'

let once = false;

export default function Person (props) {

  const [width, height] = props.size;
  const left = props.body.position.x;
  const top = props.body.position.y;
  const [bgx, bgy] = props.backgroundPosition;
  const asset = props.asset;

  return (
    <div style={{
      position: "absolute",
      zIndex: 10,
      top: top,
      left: left,
      width: width,
      height: height,
      backgroundImage: asset,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy,
      transform: `rotate(${props.angle}deg)`
    }} />
  )
}