// 用类型保护的方式来解决联合类型中出现的错误
interface Bird {
  fly: boolean;
  sing: () => {};
}
interface Dog {
  fly: boolean;
  bark: () => {};
}
// 通过类型断言来做语法保护
function judgeAnimal(animal: Bird | Dog) {
  if (animal.fly) {
    (animal as Bird).sing();
  } else {
    (animal as Dog).bark();
  }
}

// 通过 in 语法来做语法保护
function judgeAnimal1(animal: Bird | Dog) {
  if ('sing' in animal) {
    animal.sing();
  } else {
    animal.bark();
  }
}

// typeof 来做语法保护
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  } else {
    return first + second;
  }
}

// instanceof 来做语法保护  instanceof 只能class用   interface 没有
class NumObj {
  count: number;
}

function add2(first: object | NumObj, second: object | NumObj) {
  if (first instanceof NumObj && second instanceof NumObj) {
    return first.count + second.count;
  }
  return;
}
