console.log('Main JS Here');

// Hero Section
// HTML Element
const greetingTextEl = document.querySelector('#greeting');
const weatherEl = document.querySelector('p#weather');

// variables
const greetingText = 'Good Morning!';
const weatherCondition = 'Sunny';
const userLocation = 'New York';
let temperature = 22.86;
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)} °C outside`

// Assigning Values
greetingTextEl.textContent = greetingText;
weatherEl.textContent = weatherText;