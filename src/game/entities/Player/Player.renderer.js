import React from 'react'
import PlayerBg from '../../../assets/sprite-sheets/player/player.png';
import indicator_up from '../../../assets/sprite-sheets/player/indicator_up.png';
import indicator_down from '../../../assets/sprite-sheets/player/indicator_down.png';
import indicator_left from '../../../assets/sprite-sheets/player/indicator_left.png';
import indicator_right from '../../../assets/sprite-sheets/player/indicator_right.png';
import indicator_down_left from '../../../assets/sprite-sheets/player/indicator_down_left.png';
import indicator_up_left from '../../../assets/sprite-sheets/player/indicator_up_left.png';
import indicator_down_right from '../../../assets/sprite-sheets/player/indicator_down_right.png';
import indicator_up_right from '../../../assets/sprite-sheets/player/indicator_up_right.png';

let once = false;

export default function Person(props) {

  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const bgx = props.backgroundX;
  const bgy = props.backgroundY;

  if (!once) {
    once = true
  }

  const getIndicator = () => {
    switch (props.angle) {
      case 270:
        return { image: indicator_up, left: -15, top: -30 };
      case -90:
        return { image: indicator_up, left: -15, top: -30 };
      case 90:
        return { image: indicator_down, left: -15, top: 10 };
      case -270:
        return { image: indicator_down, left: -15, top: 10 };
      case -45:
        return { image: indicator_up_right, left: 0, top: -25};
      case 315:
        return { image: indicator_up_right, left: 0, top: -25};
      case -135:
        return { image: indicator_up_right, left: 0, top: -25};
      case 45:
        return { image: indicator_down_right, left: -10, top: -5};
      case 315:
        return { image: indicator_down_right, left: -10, top: -5};
      case -225:
        return { image: indicator_down_right, left: -25, top: 15};
      default:
        return { image: indicator_right, left: 0, top: -10};
    };
  };

  const chooseRotate = () => {
    const angle = props.angle;
    if (angle < 0) return "rotateY(180deg)";
    return null;
  }

  return (
    <div style={{
      position: "absolute",
      zIndex: 10,
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: `url(${PlayerBg})`,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy,
      backgroundRepeat: "no-repeat",
      transform: chooseRotate()
    }}>
      <div style={{
        position: "absolute",
        left: getIndicator().left,
        top: getIndicator().top,
        width: 70,
        height: 70,
        backgroundImage: `url(${getIndicator().image})`,
        backgroundSize: 'cover'
      }}></div>
    </div>
  )
}