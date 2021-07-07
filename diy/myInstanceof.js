// 手撕instanceof
function myInstanceof(left, right) {
  var proto = left.__proto__;
  var prototype = right.prototype;
  if (proto == null) {
    return false;
  } else if (proto === prototype) {
    return true;
  } else {
    return myInstanceof(left, right);
  }
}
