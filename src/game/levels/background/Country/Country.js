import background from './Country.png';
import hillsPNG from '../../../../assets/sprite-sheets/bg.png'

const asset = `url(${background})`;

const Country = {
  arc1: { w: 242, h: 95, bgx: -47, bgy: -46, perspective: 10  },
  leftHalfArc1: { w: 121, h: 95, bgx: -47, bgy: -46, perspective: 10  },
  rightHalfArc1: { w: 121, h: 95, bgx: -159, bgy: -46, perspective: 10  },
  middleArc1: { w: 199, h: 95, bgx: -447, bgy: -46, perspective: 10  },
  tower: {
    small: { w: 114, h: 221, bgx: -950, bgy: -46, perspective: 10  },
    medium: { w: 114, h: 292, bgx: -1110, bgy: -46, perspective: 10  },
    big: { w: 114, h: 370, bgx: -1276, bgy: -46, perspective: 10 }
  },
  scultpure: { w: 188, h: 151, bgx: -304, bgy: -174, perspective: 10  },
  stackOfHay: { w: 77, h: 36, bgx: -834, bgy: -234, perspective: 25  },
  houses: {
    square: { w: 205, h: 157, bgx: -45, bgy: -352, perspective: 10 },
    noWalls: { w: 266, h: 146, bgx: -34, bgy: -612, perspective: 10  },
  },
  hills: { w: 1900, h: 700, bgx: 0, bgy: 0, perspective: 7  },
}

const getItem = (left, top, key, key2) => {
  const { w, h, bgx, bgy, perspective } = key2 ? Country[key][key2] : Country[key];
  return ({
    width: w,
    height: h,
    bgx: bgx,
    bgy: bgy,
    left: left,
    top: top - h,
    asset: key === "hills" ? `url(${hillsPNG})` : asset,
    perspective: perspective
  })
}

export default {
  arc1: (left, top) => getItem(left, top, "arc1"),
  leftHalfArc1: (left, top) => getItem(left, top, "leftHalfArc1"),
  rightHalfArc1: (left, top) => getItem(left, top, "rightHalfArc1"),
  middleArc1: (left, top) => getItem(left, top, "middleArc1"),
  tower: (left, top, size) => getItem(left, top, "tower", size),
  scultpure: (left, top) => getItem(left, top, "scultpure"),
  stackOfHay: (left, top) => getItem(left, top, "stackOfHay"),
  houses: (left, top, type) => getItem(left, top, "houses", type),
  hills: (left, top) => getItem(left, top, "hills")
}