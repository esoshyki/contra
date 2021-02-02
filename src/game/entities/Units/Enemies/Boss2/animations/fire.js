const bgx = [
  0, -212, -424, -636, -848, -1272, -848, -1272, -848, -1272, -636, -424, -212, 0
]


const fire = [
  {
    slides: bgx.map((el, idx) => {
      const width = idx >= 4 && idx <= 9 ? 302 : 212
      return ({
        backgroundPositionX: el,
        backgroundPositionY: -470,
        width,
        height: 115,
        duration: 6
      })
    }),
    isCycle: false
  }
]

export default fire;