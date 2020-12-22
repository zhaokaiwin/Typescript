// 基础类型有 number string void undefined null symbol boolean
let count: number;
count = 123;

// 对象类型 {} , Class , function , []
const func = (str: string): number => {
  return Number(str);
};

const func1: (str: string) => number = (str) => {
  return Number(str);
};
