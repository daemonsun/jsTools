var url = "http://www.baidu.com?username=jtao&password=1234";

var data = url
  .split("?")[1]
  .replace(/&/g, '","')
  .replace(/=/g, '":"')
  .toString();

console.log(JSON.parse('{"' + data + '"}'));
