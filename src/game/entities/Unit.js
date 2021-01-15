export default class Unit {
  constructor(size) {
    this.size = [size, size];
    this.isJumping = false;
    this.backgroundX = -40;
    this.backgroundY = 0;
    this.angle = 0;
    this.health = 100;
    this.animation = {
      animations: idle,
      animationIdx: 0,
      frameIdx: 0,
      durationIdx: 0,
      isCycle: true
    };
    this.speed = 5;
    };

    defaultAnimation = () => {
      this.changeAnimation(idle)
    }
  
    changeAnimation = (animation) => {
      if (this.isJumping) {
        return;
      }
      if (animation !== this.animation.animations) {
        this.animation = {
          animations: animation,
          animationIdx: 0,
          frameIdx: 0,
          durationIdx: 0,
          isCycle: true
        } 
      } 
    };
  
    animate = () => {
  
      const { animations, animationIdx, frameIdx, durationIdx } = this.animation;
      const currentAnimation = animations[animationIdx];
  
      if (!currentAnimation) {
        return this.defaultAnimation()
      };
      
      const slides = currentAnimation.slides;
      const frame = slides[frameIdx];
  
      if (!frame || !currentAnimation) {
        return this.defaultAnimation();
      };
  
      const { duration } = frame;
      const { isCycle } = currentAnimation;
    
      if(durationIdx === 0) {
        const { x, y, w, h, } = frame;
        this.backgroundX = x; this.backgroundY = y;
        this.size = [w, h];
      }
  
      this.animation.durationIdx += 1;
  
      if (this.animation.durationIdx > duration) {
        this.animation.durationIdx = 0;
        this.animation.frameIdx += 1;
  
        if (!slides[this.animation.frameIdx]) {
          if (isCycle) {
            this.animation.frameIdx = 0;
          } else {
            this.animation.animationIdx += 1;
            this.animation.frameIdx = 0;
            if (!animations[this.animation.animationIdx]) {
              console.log('here')
              this.defaultAnimation()
            };
          };
        };
      };
    };
}