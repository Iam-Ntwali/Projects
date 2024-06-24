console.log('Running');
// Declaring variables
let name = 'Ntwali';
console.log(name);

// number
let age = 25;
console.log(age);

// functions
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(2, 3));


// arrays
let students = ['Eric', 'John', 'Smith', 'Jackson'];
console.log(students);

for (data in students) {
  if (students[data] !== 'Eric') {
    console.log(`student ${Number(data) + 1} is ${students[data]}`);
  }
}

// challenge
let firstFavNum = 24;
let secondFavNum = 36;

console.log(firstFavNum + secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** 2);
//

let user = 'Ntwali';
const occupation = 'Web Developer';

let whatDoesUserDo = user + ' is a ' + occupation;
console.log(whatDoesUserDo);
console.log(whatDoesUserDo.slice(0));

let favActorFirstName = 'Nicolas';
let favActorLastName = 'Cage';
let actorFullName = favActorFirstName + ' ' + favActorLastName;
console.log(actorFullName);

let uppercase = actorFullName.toUpperCase();
console.log(uppercase);
actorFullName += ' best movie is Firefox';
console.log(actorFullName);

// CONVERT TYPES
let money = 50; // type of money is  a number
console.log(money, 'is a', typeof money);

money = String(money); // convert a number to a string
console.log(money, 'is now a', typeof money);

money = parseInt(money); // convert a string to a number
console.log(money, 'is now a', typeof money, 'again 🙂');

money = Number(money); // convert a string to a number
console.log('or using the constructor Number()', money, 'is still converted to a', typeof money);

// CONTROL FLOW (if, if else, switch case) //
const password = '@u9e-0';
const login = 'logged in successfully';
if (password.length >= 8) {
  console.log(login);
} else {
  console.warn('password is too short', '\n Your passsword is', password.length, 'characters long');
}

let workingDays

switch (workingDays) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Not a valid day');
    break;
}

// for loop
// for (initialExpression; condition; iteration) {}
for (let i = 0; i < 5; i++) {
  console.log('-- outer --', '*');
  for (let j = 0; j < 5; j++) {
    console.log('-- inner --', j);
  }
}

// while loop
let i = 0; // initial iteration
while (i <= 5) { // condition
  console.log(i);
  i++; // increment
}

//do while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 5);

// LOGICAL OPERATOR
const a = true;
const b = false;
const c = true;
const d = false;
// 1. -> && and operator ==> Always eveluate to false unless both operands are true
console.log(a && b); // false
console.log(a && c); // true
console.log(b && c); // false
console.log(b && d); // false

// 2. -> || or operator ==> Always eveluate to true unless as long as one operand is true
console.log(a || b); // true
console.log(a || c); // true
console.log(b || c); // true
console.log(b || d); // false

// 3. -> ! Logical Not operator ==> Reverse the operand value boolean
console.log(!a); // false
console.log(!b); // true
console.log(!c); // false
console.log(!d); // true

// TERNARY OPERATOR


// ARRAYS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers); //
console.log(numbers.length); // array length
console.log(numbers[0]); // accessing item in array using index
console.log(numbers[numbers.length - 1]); // accessing last item in array

const nestedArray = ["a", "b", ["c", "d", "e", "f"], "g", "h"];
console.log(nestedArray.sort()); // sort array items
console.log(nestedArray);
console.log(nestedArray.reverse()); // reverse array items
console.log(nestedArray);
console.log(nestedArray.indexOf("b")); // find index of an item in array
console.log(nestedArray);
console.log(nestedArray.includes("c")); // check if an item exists in array
console.log(nestedArray.push("i")); // add item to end of array
console.log(nestedArray);
console.log(nestedArray.pop()); // remove item from end of array
console.log(nestedArray);
console.log(nestedArray.shift()); // remove item from start of array
console.log(nestedArray);

// OBJECTS
const person = {
  name: 'Ntwali',
  age: 25,
  hobbies: ['music', 'sports', 'reading'],
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  }
};
person.hobbies.pop();
person.address.street = 'KK 74 St';
person.address.city = 'Kigali';
console.log(person);
