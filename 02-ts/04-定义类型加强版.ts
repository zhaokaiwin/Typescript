const number: string = '123'; // 静态赋值也意味着变量具有改类型的所有方法
const number3 = number.concat('456');
console.log(number3);

interface Point {
  // 定义的时候也基本确定了属性的类型， 也是不可以改变的
  x: number;
  y: number;
}
const point: Point = {
  x: 1,
  y: 2,
};
