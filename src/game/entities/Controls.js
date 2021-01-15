export default class Controls {
  constructor() {
    this.settings = {
      moveRight: "ArrowRight",
      moveLeft: "ArrowLeft",
      lookUp: "ArrowUp",
      lookDown: "ArrowDown",
      jump: " ",
      fire: "d",
    };
    this.actions = [];
  }

  keydown = key => {
    if (Object.values(this.settings).includes(key)) {
      if (this.actions.includes(key)) {
        return 
      } else {
        this.actions.push(key);
      };
    };
    console.log(this.actions)
  }

  keyup = key => {
    if (Object.values(this.settings).includes(key)) {
      if (this.actions.includes(key)) {
        const idx = this.actions.indexOf(key);
        this.actions = this.actions.slice(0, idx).concat(this.actions.slice(idx + 1));
      } else {
        return
      };
    };
    console.log(this.actions)
  }

}