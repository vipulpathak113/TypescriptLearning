export { }
let a = "hello vipul"
console.log(a)
let msg: string = "helooo"; //string declaration
console.log(msg)

let arr: number[] = [1, 2, 3]; //array declaration
console.log("arr", arr);

let arr1: Array<number> = [2, 3, 4]; //array declaration
console.log("arr", arr1);

enum Color { Red = 5, Black, Blue }; //enum declaration

let c: Color = Color.Blue;
console.log("col", c);

let tup: [string, number] = ["Vipul", 1]; // tuple declaration for different type data types 
console.log("tup", tup);

// with type "any" we can assign any type value to variables or can perform anything without error
let myval: any = "ram";
myval = true;
myval();

// with type "any" we can assign any type value to variables but we cannot perform anything else it will give error
let newval: unknown = "vipul";
newval = true;
newval = 2;
(newval as string).toUpperCase(); // explicitly mentioned as string otherwise throws error


function add(num1: number, num2: number) {
    return num1 + num2;
}

add(2, 3);
// add(2);  if arguments given cannot call a function without parametrs...

// but we can do optional parameter with the help of ?
// optional parameter will always be after required parameter
function add1(num1: number, num2?: number) {

    if (num2) {
        return num1 + num2
    }
    else {
        return num1
    }
}

// we can also mention type of fncn return
function add3(num1: number, num2: number) : number {
    return num1 + num2;
}





