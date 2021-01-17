export default class Unit {
  constructor(size, defaultAnimation, factory, angle) {
    this.size = size
    this.isJumping = false;
    this.backgroundX = -40;
    this.backgroundY = 0;
    this.angle = angle;
    this.health = 100;
    this.defaultAnimation = defaultAnimation;
    this.animation = {
      animations: defaultAnimation,
      animationIdx: 0,
      frameIdx: 0,
      durationIdx: 0,
      isCycle: true
    };
    this.speed = 5;
    this.factory = factory;
    };

    restoreAnimation = () => {
      this.changeAnimation(this.defaultAnimation);
    };
  
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
        return this.restoreAnimation()
      };
      
      const slides = currentAnimation.slides;
      const frame = slides[frameIdx];
  
      if (!frame || !currentAnimation) {
        return this.restoreAnimation();
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
              this.restoreAnimation()
            };
          };
        };
      };
    };

    hit = (dmg) => {
      this.health -= dmg;
      if (this.health <= 0) {
        this.die()
      };
    };
};