const deleteAndPush = ({array, key}) => {
  const idx = array.indexOf(key);

  if (idx < 0) {
    array.push(key);
    return array
  };

  if (array.length === 1) {
    return array
  }
  
  return [...array.slice(0, idx).concat(array.slice(idx + 1)), key]
};

const findAndDelete = ({array, key}) => {
  const idx = array.indexOf(key);

  if (idx < 0) {
    return array
  };

  return array.slice(0, idx).concat(array.slice(idx + 1))
};

const pushOrPass = ({array, key}) => {
  if (array.includes(key)) {
    return
  };
  array.push(key);
};

export { findAndDelete, deleteAndPush, pushOrPass };

