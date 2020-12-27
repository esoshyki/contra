const MoveBoxRight = (entities, { input }) => {

  const { payload } = input.find(x => x.name === "onKeyDown") || {};


  if (payload) {

    const { key } = payload;
    const box1 = entities["box1"];
    let newx = 1;
    let newy = 1;

    const moveRight = () => {
      box1.x += newx;
      newx += 1;
      if (newx <= 3) {
        window.requestAnimationFrame(moveRight)
      } 
    }

    const moveLeft = () => {
      box1.x -= newx;
      newx += 1;
      if (newx <= 3) {
        window.requestAnimationFrame(moveLeft)
      } 
    }

    const moveDown = () => {
      box1.y += newy;
      newy += 1;
      if (newy <= 3) {
        window.requestAnimationFrame(moveDown)
      } 
    }

    const moveUp = () => {
      box1.y -= newy;
      newy += 1;
      if (newy <= 3) {
        window.requestAnimationFrame(moveUp)
      } 
    }

    switch (key) {
      case "ArrowUp":
        window.requestAnimationFrame(moveUp)
        break
      case "ArrowDown":
        window.requestAnimationFrame(moveDown)
        break
      case "ArrowRight":
        window.requestAnimationFrame(moveRight)
        break
      case "ArrowLeft":
        window.requestAnimationFrame(moveLeft)
        break
      }
  }


  return entities;
};
 
export { MoveBoxRight };