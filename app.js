// Load existing listings from localStorage or initialize an empty array
const listings = JSON.parse(localStorage.getItem('listings')) || [];

// Function to save a new listing to localStorage
function submitListing(event) {
  event.preventDefault();

  // Retrieve form data
  const formData = new FormData(event.target);

  const newListing = {
    name: formData.get('name'),
    sex: formData.get('sex'),
    breed: formData.get('breed'),
    age: formData.get('age'),
    color: formData.get('color'),
    description: formData.get('description'),
    price: formData.get('price'),
    location: formData.get('location'),
  };

  // Add the new listing to the array
  listings.push(newListing);

  // Save the updated listings array to localStorage
  localStorage.setItem('listings', JSON.stringify(listings));

  alert('Listing submitted successfully!');
  event.target.reset(); // Clear the form

  // Redirect to the listings page
  window.location.href = 'listings.html';
}

// Function to render all listings on the listings page
function renderListings() {
  const listingsContainer = document.getElementById('listings-container');

  if (!listingsContainer) return; // Exit if not on the listings page

  listingsContainer.innerHTML = ''; // Clear existing listings

  // Loop through the listings array and display each listing
  listings.forEach((listing) => {
    const listingElement = document.createElement('div');
    listingElement.classList.add('listing');
    listingElement.innerHTML = `
      <h3>${listing.name}</h3>
      <p><strong>Sex:</strong> ${listing.sex}</p>
      <p><strong>Breed:</strong> ${listing.breed}</p>
      <p><strong>Age:</strong> ${listing.age}</p>
      <p><strong>Color:</strong> ${listing.color}</p>
      <p><strong>Description:</strong> ${listing.description}</p>
      <p><strong>Price:</strong> $${listing.price}</p>
      <p><strong>Location:</strong> ${listing.location}</p>
    `;
    listingsContainer.appendChild(listingElement);
  });
}

// Attach event listener to the form if on the Create Listing page
const form = document.querySelector('#listing-form');
if (form) {
  form.addEventListener('submit', submitListing);
}

// Render listings if on the Listings page
document.addEventListener('DOMContentLoaded', renderListings);
