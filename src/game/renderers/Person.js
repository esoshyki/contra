import React from 'react'

export default function Person (props) {{
  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;

  return (
    <div style={{
      position: "absolute",
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundColor: props.color
    }} />
  )
}}