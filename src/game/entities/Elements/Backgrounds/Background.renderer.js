import React from 'react'

export default function BackgroundRenderer (props) {{

  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;  
  const y = props.body.position.y - height / 2;
  const { bgx, bgy, asset, perspective } = props;

  return (
    <div style={{
      position: "absolute",
      zIndex: Math.round(perspective / 5),
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