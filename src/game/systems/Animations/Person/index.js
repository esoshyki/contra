import moveRightSlides from './moveRight';

const defaultActions = {
  movingRight: false,
  moveinLeft: false,
  jumping: false,
};

export default class PlayerAnimator {
  constructor (entity) {
    this.entity = entity;
    this.actions = {...defaultActions};
  }

  stopMoving = () => {
    this.actions = {...defaultActions};
  }

  moveRight = async () => {
    let idx = 0
    let interval;
    const changeSlide = () => {
      const {x, y} = moveRightSlides[idx];
      this.entity.background = [x, y]
      idx = (idx + 1) % moveRightSlides.length;
    }
    if (this.actions.moveRight) {
      interval = setInterval(changeSlide, 300)
    } else {
      clearInterval(interval)
    }
  }
}