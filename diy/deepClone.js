// 深拷贝
function deepClone(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  // 时间对象
  if (obj instanceof Date) {
    var newDate = new Date();
    return newDate.setDate(obj.getDate());
  }
  // 正则对象
  if (obj instanceof RegExp) {
    return new obj.constructor(obj);
  }
  let newObj = Array.isArray(obj) ? [] : {};
  for (let i in obj) {
    newObj[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
  }
  return newObj;
}
