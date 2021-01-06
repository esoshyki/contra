import React from 'react'
import backhouse1 from '../../assets/sprite-sheets/elements/backhouse1.png';


export default function Backgorund (props) {{

  const switchBg = _ => {
    switch (props.asset) {
      case "backhouse1":
        return `url(${backhouse1})`
      default:
        return `url(${backhouse1})`
    }
  }

  const width = props.width;
  const height = props.height;
  const x = props.left - width / 2;
  const y = props.top - height / 2;
  const bg = switchBg()

  return (
    <div style={{
      position: "absolute",
      zIndex: 2,
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: bg,
      backgroundSize: "cover"
    }} />
  )
}}