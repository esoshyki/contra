import React from 'react'
import PlayerBg from '../../assets/sprite-sheets/player/player.png';
import indicatorX from '../../assets/sprite-sheets/player/indicator.gif';
import indicatorY from '../../assets/sprite-sheets/player/indicatorDown.gif';

export default function Person (props) {

  const [width, height] = props.isJumping ? [45, 45] : props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const bgx = props.backgroundX;
  const bgy = props.backgroundY;
  const rotate = props.rotate;

  const getindicatorProps = () => {
    if (props.look) {
      switch (props.look) {
        case 'up':
          return { left: 0, top: -height - 20, transfrom: "rotateY(180deg)", image: indicatorY }
        case "down":
          return { left: 0, top: height, transfrom: null, image: indicatorY }
      }
    } else {
      switch (props.direction) {
        case 'right':
          return { left: width, top: 0, transfrom: null, image: indicatorX }
        case "left":
          return { left: width, top: 0, transfrom: null, image: indicatorX  }
      }
    }

  }

  const indicatorprops = getindicatorProps();

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
        position: "relative",
        width: 42,
        height: 42,
        left: indicatorprops.left,
        top: indicatorprops.top,
        transfrom: indicatorprops.transform,
        backgroundImage: `url(${indicatorprops.image})`,
        backgroundSize: 'cover'
      }}></div>
    </div>
  )
}