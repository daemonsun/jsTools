function flattern(array) {
  let newArray = [];
  for (let i in array) {
    if (Array.isArray(array[i])) {
      newArray = newArray.concat(flattern(array[i]));
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(flattern([1, [1, 2, [1, 2, 3]]]));
