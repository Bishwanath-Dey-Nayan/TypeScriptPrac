export {};
let sum: number = 123;
let name: string = "Nayan";

let message: string = `Hello I am ${name} and printing the number ${sum} to the console`;
let isExists: boolean = true;


//array
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

//tuple

let person1: [string,number]=["Nayan",2];

//enum

enum Color{Red=5,Green,Blue};

let c: Color =  Color.Red;


//Any Type

let randomValue: any = 12;
randomValue = "Nayan";
randomValue = true;

//unkonwn

let myVariable: unknown = 12;
(myVariable as string).toUpperCase();//we need to specify the type for getting the default method



//union of types for a same variable

let multipleTypes: number|boolean;
multipleTypes=12;
multipleTypes = true;


console.log(c);
console.log(message);