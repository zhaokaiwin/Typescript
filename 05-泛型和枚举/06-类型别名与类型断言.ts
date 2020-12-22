// 类型别名 type aliases
type Isum = (x: number, y: number) => number;
function sum(x: number, y: number): number {
  return x + y;
}

const num: Isum = sum;
// 函数在类型别名中的使用
type getNameFunc = () => string;
type getNameStr = string | getNameFunc;
function getName(x: getNameStr): string {
  if (typeof x === 'string') {
    return x;
  } else {
    return x();
  }
}

// 类型断言 type assertion **** 类型断言不是类型转换  不能转换类型  -- 如果将返回值给为boolean 就会报错
function getLength(x: string | number): number {
  //   类型断言第一种方式
  if ((<string>x).length) {
    return (<string>x).length;
  } else {
    return x.toString().length;
  }

  //   类型断言第二种方式
  //   let str = x as String;
  //   if (str.length) {
  //     return str.length;
  //   } else {
  //     let num = x as Number;
  //     return num.toString().length;
  //   }
}
