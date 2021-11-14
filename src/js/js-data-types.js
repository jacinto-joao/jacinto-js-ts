// In Javascript there 7 data types

//1) Numbers => Floating points numbers used for decimals and integers values
//2) Strings => A sequence of characters - used for text
//3) Boolean => Logical type can only be true or false.
//4) Null => Empty values
//5) Undefined => Used for variables that are not initialized yet (empty values)
//6) BigInt => User for larger integers that can not be holded on type numbers
//7) Symbols => Used for values that is unique and cannot be changed

let age = 30;
console.log(age);

let name = "Jay";
console.log(name);

let isAuthenticated = true;

if (age > 25) {
  console.log(isAuthenticated);
} else {
  isAuthenticated = false;
  console.log(isAuthenticated);
}

let x = null;
console.log(x);

let xy;
console.log(typeof xy);

let nNumber = 9223372036854775807; //Still a number try to get one from Google
console.log(typeof nNumber);
