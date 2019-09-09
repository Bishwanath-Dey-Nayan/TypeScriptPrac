"use strict";
exports.__esModule = true;
function fullName(person) {
    console.log("FullName is:" + person.firstName + person.lastName);
    return "FullName is:" + person.firstName + person.lastName;
}
var p = {
    firstName: 'Nayan',
    lastName: 'dey'
};
fullName(p);
