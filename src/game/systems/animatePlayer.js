const actionCoords = {
  right: [
    {duration: 4, x: -517, y: -477}, 
    {duration: 4, x: -597, y: -477}, 
    {duration: 4, x: -678, y: -477}, 
    {duration: 4, x: -774, y: -477}, 
    {duration: 4, x: -850, y: -477},
    {duration: 4, x: -774, y: -477},   
    {duration: 4, x: -678, y: -477}, 
    {duration: 4, x: -597, y: -477}, 
  ],
  left : [
    {duration: 2, x: -407, y: -477}, 
    {duration: 2, x: -323, y: -477}, 
    {duration: 5, x: -241, y: -477}, 
    {duration: 1, x: -145, y: -477}, 
    {duration: 1, x: -63, y: -477},
    {duration: 1, x: -145, y: -477},   
    {duration: 5, x: -241, y: -477}, 
    {duration: 2, x: -323, y: -477}, 
    ]
}

const action = function(action) {
  this.idx = 0;
  this.coords = actionCoords[action]
  this.duration = this.coords[0].duration;
  this.durationReduce = 0;

  this.animate = player => {
    console.log(`this.idx =`, this.idx);
    console.log(`this.duration =`, this.duration);
    console.log(`this.durationReduce = `, this.durationReduce  )
    if (this.durationReduce < this.duration) {
      player.backgroundX = this.coords[this.idx].x;
      player.backgroundY = this.coords[this.idx].y;
      this.durationReduce += 1;
    } else {
      console.log(this.coords.length)
      this.idx = (this.idx + 1) < this.coords.length ? this.idx + 1 : 0;
      this.durationReduce =0
      this.duration=this.coords[this.idx].duration
    }
  }
}

const right = new action("right")
const left = new action("left")

const animations = {
  "ArrowRight" : right,
  "ArrowLeft" : left,
  // "ArrowDown" : down,
  // "ArrowUp" : up
}

const AnimatePlayer = (entities, { input }) => {


const { payload } = input.find(x => x.name === "onKeyDown") || {};

if (payload) {

  input.forEach(el => console.log(el))
  console.log(input)
  const { key } = payload;
  const player = entities["box1"];

  if (Object.keys(animations).includes(key)) {
    animations[key].animate(player)
  }

}


return entities;
};

export default AnimatePlayer ;