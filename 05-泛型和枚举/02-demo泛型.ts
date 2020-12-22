function join<T>(first: T, second: T) {
  return eval(`${first}+ ${second}`);
}
console.log(join<string>('1', '1'));

// T[]
function map<T>(params: Array<T>) {
  return params;
}

console.log(
  map<number>([123])
);

function join1<T, P>(first: T, second: P) {
  return {
    first,
    second,
  };
}
join1<string, number>('a', 1);
join1(1, 1);

function join2<T>(first: T, second: T): T {
  return first;
}
join2<number>(1, 1);
