const accountId = 144553
let accountEmail="arena@google.com"
var accountPassword="12345"
accountCity="Jaipur"
//accountId=2 //not allowed
accountEmail="xyz@gmail.com"
accountPassword="scscsc"
accountCity="Bangalore"
let accountState;
console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState]);
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/