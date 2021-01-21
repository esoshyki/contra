import React from 'react'

let once = true;

export default function Static (props) {

  const width = props.width;
  const height = props.height;
  const x = props.body.position.x - width / 2;  
  const y = props.body.position.y - height / 2;
  const { bgx, bgy, asset } = props;
  const isVisible = props.isVisible;

  return isVisible ? (
    <div style={{
      position: "absolute",
      zIndex: props.zIndex || 5,
      top: x,
      left: y,
      width: width,
      height: height,
      backgroundImage: asset,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy
    }} />
  ) : null;
}