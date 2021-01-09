import React from 'react'
import floor1 from '../../assets/sprite-sheets/floor/1.png';
import floor2 from '../../assets/sprite-sheets/floor/2.png';
import floor3 from '../../assets/sprite-sheets/floor/3.png';
import floor4 from '../../assets/sprite-sheets/floor/4.png';
import boxImg from '../../assets/sprite-sheets/box.jpg'

export default function Static (props) {{

  const switchBg = _ => {
    switch (props.type) {
      case "floor1":
        return `url(${floor1})`
      case "floor2":
        return `url(${floor2})`
      case "floor3":
        return `url(${floor3})`
      case "box" :
        return `url(${boxImg})`      
      default:
        return `url(${floor4})`
    }
  }

  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const bg = switchBg()

  return (
    <div style={{
      position: "absolute",
      zIndex: 5,
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: bg,
      backgroundRepeat: "repeat-x",
    }} />
  )
}}