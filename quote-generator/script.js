// Getting HTML elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const getQuoteBtn = document.getElementById('getQuote');
const loader = document.getElementById('loader');

// Loader function
function showLoader() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loader function
function hideLoader() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show New Quote
const showQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotesData.length);
  const quote = quotesData[randomIndex];

  // Check quote text length to determine font size
  quote.text.length > 50 ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote');



  quoteText.textContent = quote.text;
  authorText.textContent = ` ${quote.author}`;
}


// Tweet Quote
function tweetQuote() {
  const tweetText = `"${quoteText.textContent}" ${authorText.textContent}`;
  const tweetURL = `https://twitter.com/intent/tweet?text=${tweetText}`;

  window.open(tweetURL, '_blank');
}

// Event listener to change quote
getQuoteBtn.addEventListener('click', showQuote);
// Event listener to tweet quote
twitterBtn.addEventListener('click', tweetQuote);

showQuote();
