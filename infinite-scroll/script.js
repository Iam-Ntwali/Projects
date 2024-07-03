// Getting HTML elements
const imagesContainer = document.getElementById('images-container');
const loader = document.getElementById('loader');

// Variables
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photoArray = [];
// let initialLoad = true;

// Unsplash API
const count = 30;
const API_KEY = 'cEXh96yAEYnHqhU_3oyGZxtiKEhsZOPXi0mBmUGZVD0';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}`;


// Check if all photos done loading
const imageLoaded = () => {
  console.log('Images done loading');
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    console.log('ready =', ready);
    // initialLoad = false;
    // count = 30;
    // displayPhoto();
  }
}

// Attribute set function
const setAttributes = (el, attr) => {
  for (const key in attr) {
    el.setAttribute(key, attr[key]);
  }
};

// Create Elements for links and images, add them to the DOM
const displayPhoto = () => {
  imagesLoaded = 0;
  totalImages = photoArray.length;
  console.log('Total Images = ', totalImages);
  // Iterate through each object in photosArray
  photoArray.forEach((photo) => {
    // Create <a> element to link to Unsplash
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    });

    // Create <img> for Photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });

    // Event listener to check IMG loding end
    img.addEventListener('load', imageLoaded);

    // Append img to <a> and the <a> element to the DOM
    item.appendChild(img);
    imagesContainer.appendChild(item);
  });

};

// Get photos from Unsplash API
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    photoArray = await response.json();
    displayPhoto();

  } catch (error) {
    console.error('Error:', error);
  }
};

// Check if scrolling is near bottom of the screen to load more photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 1000 && ready) {
    ready = false;
    getPhotos();
    console.log('More photos loaded');
  }
})

getPhotos(); // Called on Loa