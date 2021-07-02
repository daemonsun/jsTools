// 快速排序
// arguments:
// 1. arr: Array 一维数组
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const middleData = arr.splice(middle, 1)[0];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middleData) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(middleData, quickSort(right));
}
console.log(quickSort([1, [1, 2], [1, 2]]));
