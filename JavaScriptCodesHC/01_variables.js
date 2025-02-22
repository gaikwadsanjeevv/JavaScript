const accountID = 1445531
let accountEmail = "sanjeev@google.com" //used more
var accountPassword = "12345"  //Not used now
accountCity = "Jaipur"

//accountId = 2 //Not allowed 

accountEmail = "sg@gs.com"
accountPassword = "212121212"
accountCity = "Kasas"  //is possible but avoid doing it.
let accountState;

console.log(accountEmail);

console.table([accountEmail, accountID, accountPassword, accountState]);
/*
prefer not to use var because of issue in block scope and functional scope
*/