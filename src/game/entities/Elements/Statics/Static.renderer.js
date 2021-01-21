import React from 'react'

let once = true;

export default function Static (props) {

  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;  
  const y = props.body.position.y - height / 2;
  const { bgx, bgy, asset } = props;
  const isVisible = props.isVisible;

  if (once) {
    console.log(props.isVisible);
    once = false;
  }


  return isVisible ? (
    <div style={{
      position: "absolute",
      zIndex: props.zIndex || 5,
      top: props.top,
      left: props.left,
      width: width,
      height: height,
      backgroundImage: asset,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy
    }} />
  ) : null;
}