function getItems<T>(arr: T[]): T[] {
  return new Array<T>().concat(arr);
}

console.log(getItems<number>([1, 2, 3]));
console.log(getItems<string>(["a", "b", "c"]));