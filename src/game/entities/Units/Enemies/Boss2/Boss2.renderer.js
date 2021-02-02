import React from 'react';
import HealthBar from '../../Adds/healthbar';

export default function Unit(props) {

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
      width: props.width,
      height: props.height,
      backgroundImage: props.asset,
      backgroundPositionX: props.backgroundPositionX,
      backgroundPositionY: props.backgroundPositionY,
      transform: chooseRotate()
    }}>
      {props.healthbar && <HealthBar props={props} />}
    </div>
  ) : null;
}