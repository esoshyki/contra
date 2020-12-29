import React from 'react'
import moveRight from '../../assets/sprite-sheets/moveright.gif';
import moveLeft from '../../assets/sprite-sheets/moveleft.gif';
import idleRight from '../../assets/sprite-sheets/idleright.gif';
import idleLeft from '../../assets/sprite-sheets/idleleft.gif';

const animations = {
  idleright: idleRight,
  idleleft: idleLeft,
  moveright: moveRight,
  moveleft: moveLeft
}

export default function Person (props) {{
  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const background = props.background;

  return (
    <div style={{
      position: "absolute",
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: `url(${animations[background]})`,
      backgroundSize: "cover",
    }} />
  )
}}