function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(1, 2));

// Objects possibly undefined
function add2(num1: number, num2: number, num3?: number): number {
  return num1 + num2 + (num3 ?? 0);
}

console.log(add2(1, 3, 5));

// arrow function
const sub = (num1: number, num2: number): number => num1 - num2;

console.log(sub(5, 1));

// alternative
const mult = function (num1: number, num2: number): number {
  return num1 * num2;
};

console.log(mult(5, 2));

function add3(num1: number, num2: number, ...nums: number[]) : number {
    return num1 + num2 + nums.reduce((a,b) => a + b, 0);
}

console.log(add3(1, 2, ...[1, 2, 3]));
