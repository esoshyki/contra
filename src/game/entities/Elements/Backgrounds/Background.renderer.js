import React from 'react'

export default function BackgroundRenderer (props) {{

  const [width, height] = props.size;
  const { bgx, bgy, asset, perspective } = props;

  return (
    <div style={{
      position: "absolute",
      zIndex: Math.round(perspective / 5),
      top: props.top,
      left: props.left,
      width: width,
      height: height,
      backgroundImage: asset,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy
    }} />
  )
}}