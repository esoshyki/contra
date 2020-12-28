import React from 'react'
import backgroundImage from '../../assets/sprite-sheets/player1.gif'

export default function Person (props) {{
  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const [backgroundX, backgroundY] = props.background;

  return (
    <div style={{
      position: "absolute",
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 500,
      backgroundPositionX: backgroundX,
      backgroundPositionY: backgroundY
    }} />
  )
}}