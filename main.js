"use strict";
//! For loop
Object.defineProperty(exports, "__esModule", { value: true });
//? Syntax: for(intialization; condition; increament / decreament ){}
//* Object 1 - 100;
//! Steps
//? stat 1
//? stat 2
//? Block of Code
//? stat 3
//? stat 2 (true)
//? Block of code
//? stat 3
//? continue...
//? stat 2 (false) => break;
//*   0,1,2,3,4,5
// for(let i: number = 1; i <= 4; i++){
//     console.log(i);
// }
// //! Increment
// // ? Pre increment  ++variableName (1.Update (+1), 2.Return) + 1
// let a: number = 1;
// console.log(++a);
// //? Post increment variableName++ (1.Return , 2.Update (+1)) + 1
// let b: number = 1;
// console.log(a + b++);
// //          1 +  1  = 2
// console.log(b);
//! While
// let i: number = 0;
// while (i <= 5) {
//   console.log(i++); 
//   console.log("Hello", i);
// }
//! Do While loop
//!Steps:
//? Block of code ek bar lazmi execute hoga.
//? Condition  (true) => again execute
//? Continue...
//? Condition  (false) => break;
// let i: number = 0;
// do{
//     ++i;
// console.log("Hello");
// }while(i < 5);
//?           Block
//? 1. hello  i=1  => condition(1 < 5) => true
//? 2. hello  i=2  => condition(2 < 5) => true
//? 3. hello  i=3  => condition(3 < 5) => true
//? 4. hello  i=4  => condition(4 < 5) => true
//? 5. hello  i=5  => condition(5 < 5) => false
//? 6. Nahi chalega
// const fruitsList: string[] = ["apple", "orange", "grapes"];
//! index no.                    0        1           2
// console.log(fruits[0]);
//? Loop iteration: How many times => array.length
//? 1. fruit = "apple" => intialize. =>   console.log(fruit) //output: apple
//? 2. fruit = "orange" => intialize. =>   console.log(fruit) //output: orange
//? 3. fruit = "grapes" => intialize. =>   console.log(fruit) //output: grapes
// for(const fruit of fruitsList){
// console.log(fruit);
// }
//? const fruit; (hamne sirf declare kia ha)
// for(const name of ["salman", "fasih", "talha"]){
//     console.log(name);    
// }
const fruitsList = ["apple", "orange", "grapes"];
// console.log(fruitsList);
let a = "daa"; //! empty string = false;
fruitsList.push();
// console.log(fruitsList);
// const message: string = "Hello World"
// const num: number = 12;
// const abc = Number("123")
// console.log(typeof abc);
// console.log((<string[]>["a","b","c"]).length)
// console.log(message.length);
// for(const txt of message){
//     console.log(txt);
// }
// const obj = {
//     name: "Muhammad Fasih",
//     age: 20,
// }
// console.log(Object.values(obj));
// console.log(Object.keys(obj));
// console.log(typeof "10");
// const Student: any = {
//     name: "Muhammad Fasih",
//     age: 12,
//     isStudent: true,
// }
// const names: string[] = ["Salman", "Fasih", "Ahmed"]
// for(const x in names){
//     console.log(names[x]);
//     // console.log(Student[x]);
// }
// console.log(1);
//! Type guard
// function isString(value: any): value is string {
//     return typeof value === 'string';
// }
// let example: string | number = 'hello';
// if (isString(example)) {
// TypeScript knows 'example' is a string here
//     console.log(example.toUpperCase());
// }
//! Declare
let variable;
//? Data type  = any;
variable = "adaa";
variable = 3131;
variable = false;
//? value = undefined
// let abc;
// console.log(abc);
// function add(a: number, b?: number): number | null{
//     if(!b){
//         return null;
//     }else{
//         return a + b;
//     }
// }
// console.log(add(4, 10));
const random = ["hello", 12, false,];
random.push("abc");
console.log(random.length);
