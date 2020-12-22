interface Big {
  money: number;
}
interface Battery extends Big {
  battery(): void;
}
class Cat implements Battery {
  battery() {}
  money = 123;
}

class Computer implements Battery {
  battery() {}
  money = 123;
}
