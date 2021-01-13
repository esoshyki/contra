import React from 'react'
import backhouse1 from '../../assets/sprite-sheets/elements/backhouse1.png';

let once;

export default function Backgorund (props) {

  const { width, height, bgx, bgy, left, top, asset, perspective } = props;
  const x = left;
  const y = top;

  if (!once) {
    console.log(props);
    console.log(x);
    console.log(y);
    console.log(bgx);
    console.log(bgy)
  once = true}

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
      backgroundPositionY: bgy,
    }} />
  )
}