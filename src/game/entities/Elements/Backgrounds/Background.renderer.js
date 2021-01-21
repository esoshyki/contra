import React from 'react'

export default function BackgroundRenderer (props) {{

  const width = props.width;
  const height = props.height;
  const x = props.body.position.x - width / 2;  
  const y = props.body.position.y - height / 2;
  const { bgx, bgy, asset, perspective } = props;

  return (
    <div style={{
      position: "absolute",
      zIndex: 0,
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: asset,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy
    }} />
  )
}}