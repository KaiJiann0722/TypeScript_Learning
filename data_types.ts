let lname : string;

lname = "Tan";

let uName = lname.toUpperCase();

console.log(uName);

let emptArray : string[];

console.log("A", "B")

let depList : Array<number>;

depList = [1, 2, 3, 4];

let result = depList.filter (num => num % 2 == 1)

let bc : [string, number] = ["2", 2];

console.log(result);

let swapNumbs : [firstNumber : number, secondNumber : number];

function swapNumbers(firstNumber : number, secondNumber : number) : [number, number] {
    return [secondNumber, firstNumber];
}

swapNumbs = swapNumbers(1, 2);

console.log(swapNumbs);

const enum Color {
    Red,
    Green,
    Blue,
}

let c : Color = Color.Blue;


/*  */