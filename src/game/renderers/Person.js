import React from 'react'
import moveRight from '../../assets/sprite-sheets/moveright.gif';
import moveLeft from '../../assets/sprite-sheets/moveleft.gif';
import idleRight from '../../assets/sprite-sheets/idleright.gif';
import idleLeft from '../../assets/sprite-sheets/idleleft.gif';
import jumpRight from '../../assets/sprite-sheets/jump_right.gif';
import jumpLeft from '../../assets/sprite-sheets/jump_left.gif';

const animations = {
  idleright: idleRight,
  idleleft: idleLeft,
  moveright: moveRight,
  moveleft: moveLeft,
  jumpright: jumpRight,
  jumpleft: jumpLeft
}

export default function Person (props) {

  const pickJumpIcon = _ => props.direction === 'right' ? animations.jumpright : animations.jumpleft;

  const getBackgroundPosition = _ => {
    switch (props.background) {
      case "idleleft":
        return [-5 , 0]
      default:
        return [0, 0]
    }
  }

  const getBgSize = _ => {
    switch (props.background) {
      case "idleleft":
        return "cover"
      default:
        return "cover"
    }
  }

  const [width, height] = props.isJumping ? [50, 50] : props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const background = props.isJumping ? pickJumpIcon() : animations[props.background];
  const [bgx, bgy] = getBackgroundPosition();
  const bgsize = getBgSize();

  return (
    <div style={{
      position: "absolute",
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundImage: `url(${background})`,
      backgroundSize: bgsize,
      backgroundPositionX: bgx,
      backgroundPositionY: bgy,
      backgroundRepeat: "no-repeat"
    }} />
  )
}