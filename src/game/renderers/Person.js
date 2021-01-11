import React from 'react'
import PlayerBg from '../../assets/sprite-sheets/player/player.png';
import indicator_up from '../../assets/sprite-sheets/player/indicator_up.png';
import indicator_down from '../../assets/sprite-sheets/player/indicator_down.png';
import indicator_left from '../../assets/sprite-sheets/player/indicator_left.png';
import indicator_right from '../../assets/sprite-sheets/player/indicator_right.png';
import indicator_down_left from '../../assets/sprite-sheets/player/indicator_down_left.png';
import indicator_up_left from '../../assets/sprite-sheets/player/indicator_up_left.png';
import indicator_down_right from '../../assets/sprite-sheets/player/indicator_down_right.png';
import indicator_up_right from '../../assets/sprite-sheets/player/indicator_up_right.png';

export default function Person (props) {

  const [width, height] = props.isJumping ? [45, 45] : props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const bgx = props.backgroundX;
  const bgy = props.backgroundY;
  const rotate = props.rotate;

  const getIndicator = () => {
    if (props.look) {
        if (props.look === "up" && !props.moving) {
          return { image: indicator_up, left: -15, top: -30 }      
        }
        if (props.look === "down" && !props.moving) {
          return { image: indicator_down, left: -15, top: 10 }     
        }
        if (props.look === 'up' && props.direction === 'right') {
          return { image: indicator_up_right, left: 0, top: -25}
        }
        if (props.look === 'up' && props.direction === "left") {
          return { image: indicator_up_right, left: 0, top: -25}
        }
        if (props.look === 'down' && props.direction === 'right') {
          return { image: indicator_down_right, left: -10, top: -5}
        }
        if (props.look === 'down' && props.direction === "left") {
          return { image: indicator_down_right, left: -25, top: 15}
        }

    } else {
      return { image: indicator_right, left: 0, top: -10}
    }
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
      transform: rotate ? "rotateY(180deg)" : null
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