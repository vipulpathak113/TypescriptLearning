"use strict";
exports.__esModule = true;
var a = "hello vipul";
console.log(a);
var msg = "helooo"; //string declaration
console.log(msg);
var arr = [1, 2, 3]; //array declaration
console.log("arr", arr);
var arr1 = [2, 3, 4]; //array declaration
console.log("arr", arr1);
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Black"] = 6] = "Black";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
; //enum declaration
var c = Color.Blue;
console.log("col", c);
var tup = ["Vipul", 1]; // tuple declaration for different type data types 
console.log("tup", tup);
// with type "any" we can assign any type value to variables or can perform anything without error
var myval = "ram";
myval = true;
myval();
// with type "any" we can assign any type value to variables but we cannot perform anything else it will give error
var newval = "vipul";
newval = true;
newval = 2;
newval.toUpperCase(); // explicitly mentioned as string otherwise throws error
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// add(2);  if arguments given cannot call a function without parametrs...
// but we can do optional parameter with the help of ?
// optional parameter will always be after required parameter
function add1(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
// we can also mention type of fncn return
function add3(num1, num2) {
    return num1 + num2;
}
