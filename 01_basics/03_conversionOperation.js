let score = "33.5"

//console.log(typeof(score)); //Both are same, just syntax is diff
//console.log(typeof score);

let valueInNumber = Number(score)
//console.log(typeof(valueInNumber));
//console.log(valueInNumber); //NaN stands for "Not a Number"

//"33" is easily converted to 33 when typecasted to Number type
//"33abc" => NaN
//true=>1; false=>0;

let isLoggedIn = "arena"
let booleanisLoggedIn=Boolean(isLoggedIn)
//console.log(booleanisLoggedIn);

//1=>true;2=>false
//""=>false
//"arena"=>true

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
