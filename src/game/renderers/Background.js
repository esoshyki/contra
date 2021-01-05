import React from 'react'
import backhouse1 from '../../assets/sprite-sheets/elements/backhouse1.png';


export default function Backgorund (props) {{

  const switchBg = _ => {
    switch (props.type) {
      case "backhouse1":
        return `url(${backhouse1})`
      default:
        return `url(${backhouse1})`
    }
  }

  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const bg = switchBg()

  return (
    <div style={{
      position: "absolute",
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: bg,
      backgroundSize: "cover"
    }} />
  )
}}