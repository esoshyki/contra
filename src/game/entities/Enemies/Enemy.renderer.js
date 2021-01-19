import React from 'react'

export default function Enemy1(props) {

  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const bgx = props.backgroundX;
  const bgy = props.backgroundY;
  const asset = props.asset;
  const effect = props.effect;
  const health = props.health;

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
      {!effect && <div style={{
        position: "absolute",
        height: 20,
        width: width + 20,
        backgroundColor: "green",
        top: -30,
        left: -10
      }}>
        <div style={{
          position: "absolute",
          height: "100%",
          width: (100 - health),
          backgroundColor: "yellow",
          left: 0,
          top: 0
        }}
        >
          <div style={{
            width: "100%",
            height: "100%",
            backgroundColor: "red",
            left: 0,
            top: 0,
            transition: "0.2s ease-out 0s",
            zIndex: 5
          }} />
        </div>

        </div>}
      {effect && <div style={{
        position: 'absolute',
        left: (width - effect.width) / 2 + (effect.deltaX || 0),
        top: (height - effect.height) / 2 + (effect.deltaY || 0),
        width: effect.width || 0,
        height: effect.height || 0,
        zIndex: 15,
        backgroundImage: effect.asset || null,
        backgroundPositionX: effect.bgx || 0,
        backgroundPositionY: effect.bgy || 0,
        transform: chooseEffectRotate()
      }}/>}
    </div>
  )
}