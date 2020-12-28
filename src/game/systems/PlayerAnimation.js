const actionCoords = {
  right: [
    {duration: 3, x: -261, y: -236}, 
    {duration: 3, x: -298, y: -236}, 
    {duration: 3, x: -338, y: -236}, 
    {duration: 3, x: -387, y: -236}, 
    {duration: 5, x: -427, y: -236},
    {duration: 3, x: -387, y: -236},   
    {duration: 3, x: -338, y: -236}, 
    {duration: 3, x: -298, y: -236}, 
  ],
  left : [
    {duration: 3, x: -199, y: -236}, 
    {duration: 3, x: -161, y: -236}, 
    {duration: 3, x: -122, y: -236}, 
    {duration: 3, x: -72, y: -236}, 
    {duration: 5, x: -31, y: -236},
    {duration: 3, x: -72, y: -236},   
    {duration: 3, x: -122, y: -236}, 
    {duration: 3, x: -161, y: -236}, 
    ]
}

const action = function(action) {
  this.idx = 0;
  this.coords = actionCoords[action]
  this.duration = this.coords[0].duration;
  this.durationReduce = 0;

  this.animate = player => {
    if (this.durationReduce < this.duration) {
      player.background = [this.coords[this.idx].x, this.coords[this.idx].y]
      this.durationReduce += 1;
    } else {
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
  const player = entities.person;

  if (Object.keys(animations).includes(key)) {
    animations[key].animate(player)
  }

}


return entities;
};

export default AnimatePlayer ;