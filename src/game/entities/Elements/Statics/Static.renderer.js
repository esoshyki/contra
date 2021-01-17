import React from 'react'

export default function Static (props) {{

  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;  
  const y = props.body.position.y - height / 2;
  const { bgx, bgy, asset } = props;

  return (
    <div style={{
      position: "absolute",
      zIndex: 5,
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: asset,
      backgroundPositionX: bgx,
      backgroundPositionYL: bgy
    }} />
  )
}}