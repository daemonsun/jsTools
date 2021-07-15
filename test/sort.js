// 解决sort函数不能正确按升序规则排列数列的问题
var arr = [0, 1, 5, 10]; // 示例数组

console.log(arr.sort()); // [ 0, 1, 10, 5 ]
// 因为sort函数是先将数组中的每个元素转换成字符串再进行排序
// 所以排序后的数组并不是真正的升序数列
// 我们可以通过传入一个比较函数作为参数，来拿到升序数列

// 比较函数
function compare(value1, value2) {
  if (value1 > value2) {
    return 1;
  } else if (value1 < value2) {
    return -1;
  } else {
    return 0;
  }
}

console.log(arr.sort(compare)); // [ 0, 1, 5, 10 ]

// 还可以改写比较函数，拿到降序数列
// 比较函数2.0
function compare2(value1, value2) {
  if (value1 > value2) {
    return -1;
  } else if (value1 < value2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(arr.sort(compare2)); // [ 10, 5, 1, 0 ]
