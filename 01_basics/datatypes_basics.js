// Primitive data types 
// 7 types : String, Number, Boolean, null, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

//const bigNumber = 34598729749347n

//Reference(Non-Primitive data types)
//Array, Objects, Functions

//Return type of Array, Objects is function
//Return type of Function is object function

const oneD = ["Harry","Zayn","Niall","Liam","Louis"]

let myObj = {
    name:"Arena", //Key-value pairs
    age:20
}


const myFunction = function(){
    console.log("Hello Arena!!");
}


