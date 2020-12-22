class Animal {
  name = 'Dog';
  static old = 8;
  constructor(name: string) {
    this.name = name;
  }
  say() {
    return `${this.name}跑的很快`;
  }
}

let cat = new Animal('喵喵');
console.log(cat.name);
console.log(cat.say());

class Mouse extends Animal {
  steal() {
    return `${this.name}偷了一袋大米`;
  }
}

let mouse = new Mouse('米老鼠');
console.log(mouse.say(), mouse.steal());

class Bird extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
  say() {
    return `${this.name}喳喳叫` + super.say();
  }
}
let bird = new Bird('小鸟');
console.log(bird.say(), bird.name);
let arr = [1, 2, 3];
let { 0: first, [arr.length - 1]: last } = arr;
console.log(first, last);
