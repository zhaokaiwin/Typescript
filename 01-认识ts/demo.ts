interface Point {
  x: number;
  y: number;
}
function tsDemo1(data: Point) {
  console.log('123');
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}
tsDemo1({ x: 1, y: 2 });
