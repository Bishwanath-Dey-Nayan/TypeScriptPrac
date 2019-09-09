"use strict";
exports.__esModule = true;
var sum = 123;
var name = "Nayan";
var message = "Hello I am " + name + " and printing the number " + sum + " to the console";
var isExists = true;
//array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tuple
var person1 = ["Nayan", 2];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
//Any Type
var randomValue = 12;
randomValue = "Nayan";
randomValue = true;
//unkonwn
var myVariable = 12;
myVariable.toUpperCase(); //we need to specify the type for getting the default method
//union of types for a same variable
var multipleTypes;
multipleTypes = 12;
multipleTypes = true;
console.log(c);
console.log(message);
