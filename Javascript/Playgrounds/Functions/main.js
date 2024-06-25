// function declaration
function check() {
  console.log('Running')
}
check();
// ====== ====== //

// function with a parameter
function helloUser(user) {
  console.log(`Hello ${user}`);
};
helloUser('Ntwali');

// function that return something
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 2));

// function expression
const multiply = function (num1, num2) {
  return num1 * num2;
}
console.log(multiply(2, 3));

// arrow function
const divide = (num1, num2) => {
  return num1 / num2;
}
console.log(divide(10, 2));

// callback function
const adminUsers = ['Ntwali', 'Theo'];
const normalUsers = ['John', 'Patrick', 'Jane', 'Ntwali'];
const loggedInUser = 'Nicole';

const adminAccess = (user, checkRoleFn) => {
  if (adminUsers.includes(user)) {
    const usrRole = 'admin';
    checkRoleFn(usrRole);
    console.log('Welcome to the Dashboard', user);
  } else if (!adminUsers.includes(user) && normalUsers.includes(user)) {
    const usrRole = 'user';
    checkRoleFn(usrRole);
    console.log('You are not an admin');
  } else {
    console.log('User not found');
  }
}

adminAccess(loggedInUser, checkRoleFn = (usrRole) => {
  if (usrRole === 'admin') {
    console.log('Access granted');
    return usrRole;
  } else {
    console.log('Access denied');
    return usrRole;
  }
})

// JSON (JavaScript Object Notation)
const course = {
  title: 'The Complete JavaScript Course',
  rating: 4.5,
  students: 30123,
  price: 190,
  isFree: true,
}
// stringfy JSON
const courseJSON = JSON.stringify(course);
console.log(courseJSON);

// parse JSON
const courseObj = JSON.parse(courseJSON);
console.log(courseObj);
// console.log(courseObj.title);
// console.log(courseObj.rating);
// console.log(courseObj.students);
// console.log(courseObj.price);
console.log('=== ===');
// DATES in JavaScript
const now = new Date();
console.log(now);
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
console.log(now.toDateString().split(' '))
console.log(now.toISOString());
console.log(now.toLocaleString());
console.log('=== ===')
// TIMEOUTS
setTimeout(() => {
  console.log('Hello');
}, 1000);

// INTERVALS
function count() {
  let count = 0;
  for (let i = 5; i > 0; i--) {
    count -= i;
  }
  return count;
};
const countDown = setInterval(() => {
  console.log(count());
}, 1000);

// clear interval
setTimeout(() => {
  clearInterval(countDown);
  console.log('Stopped interval')
}, 5000);
console.log('=== ===')