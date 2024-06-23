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