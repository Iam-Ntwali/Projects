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

// objects
let person = {
  name: 'Ntwali',
  age: 25,
  hobbies: ['music', 'sports', 'reading'],
  address: {
    street: '123 Main St',
    city: 'Boston',
    state: 'MA'
  }
};

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
