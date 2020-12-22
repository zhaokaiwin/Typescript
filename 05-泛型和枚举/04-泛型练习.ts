function swap<T, U>(param: [T, U]): [U, T] {
  return [param[1], param[0]];
}
let result = swap(['string', 123]);

console.log(result[0].toLocaleString);
console.log(result[1].substr(1, 3));

function haveLength<T>(param: T[]): T[] {
  let length = param.length;
  return param;
}
haveLength([1, 2]);

interface withLength {
  length: number;
}

function echoWidthLength<T extends withLength>(param: T): T {
  let length = param.length;
  console.log(length);
  return param;
}

let str = echoWidthLength('str');

let obj = echoWidthLength({
  length: 10,
  color: 'red',
});
let arr = echoWidthLength([1, 2, 3]);
// let num = echoWidthLength(123); // 错误示范
