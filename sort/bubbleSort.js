// 冒泡排序
function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    return new Error("入参不是数组！");
  }
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
