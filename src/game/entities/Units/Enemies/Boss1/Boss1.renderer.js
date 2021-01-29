import React from 'react';
import HealthBar from '../../Adds/healthbar';

export default function Unit(props) {

  const { bodyProps, headProps } = props;

  const left = props.body.position.x - props.width / 2;
  const top = props.body.position.y - props.height / 2;

  const chooseRotate = () => {
    const rotate = props.angle >= 0 ? "" : "rotateY(180deg)";
    return rotate;
  };

  return props.isVisible ? (
    <div style={{
      position: "absolute",
      zIndex: props.zIndex,
      top: top,
      left: left,
      width: bodyProps.width,
      height: bodyProps.height,
      backgroundImage: props.asset,
      backgroundPositionX: bodyProps.backgroundPositionX,
      backgroundPositionY: bodyProps.backgroundPositionY,
      backgroundRepeat: props.repeat || "repeat",
      transform: chooseRotate()
    }}>
      <div style={{
        position: "absolute",
        top: headProps.top,
        left: headProps.left,
        width: headProps.width,
        height: headProps.height,
        backgroundPositionX: headProps.backgroundPositionX,
        backgroundPositionY: headProps.backgroundPositionY,
        backgroundImage: props.asset
      }}/>

      {props.healthbar && <HealthBar props={props} />}
    </div>
  ) : null;
}