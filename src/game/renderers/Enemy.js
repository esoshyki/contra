import enemy1bg from '../../assets/sprite-sheets/enemy/enemy1.gif';

export default function Enemy (props) {
  const [width, height] = props.size;
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  const background = enemy1bg;
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