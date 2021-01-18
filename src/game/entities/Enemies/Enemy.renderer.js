import React from 'react'

export default function Enemy1(props) {

  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const bgx = props.backgroundX;
  const bgy = props.backgroundY;
  const asset = props.asset;
  const effect = props.effect

  if (effect) {
    console.log(effect);
  }

  const chooseRotate = () => {
    const rotate = props.angle >= 0 ? "" : "rotateY(180deg)";
    const scale = props.scale ? ` scale(${props.scale})` : "";
    return rotate + scale
  }

  const chooseEffectRotate = () => {
    const rotate = props.angle >= 0 ? "" : "rotateY(-180deg)";
    const scale = props.scale ? ` scale(${1 / props.scale})` : "";
    return rotate + scale  
  }

  return (
    <div style={{
      position: "absolute",
      zIndex: 10,
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: asset,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy,
      backgroundRepeat: "no-repeat",
      transform: chooseRotate()
    }}>
      {effect && <div style={{
        position: 'absolute',
        left: effect.centerx,
        top: effect.centery,
        width: effect.width,
        height: effect.height,
        zIndex: 15,
        backgroundImage: effect.asset,
        backgroundPositionX: effect.bgx,
        backgroundPositionY: effect.bgy,
        transform: chooseEffectRotate()
      }}/>}
    </div>
  )
}