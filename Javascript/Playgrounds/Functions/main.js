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


