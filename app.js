// Load existing listings from localStorage
const listings = JSON.parse(localStorage.getItem('listings')) || [];

function submitListing(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const sex = document.getElementById('sex').value;
  const breed = document.getElementById('breed').value;
  const age = document.getElementById('age').value;
  const color = document.getElementById('color').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const location = document.getElementById('location').value;

  // New listing object
  const newListing = {
    name,
    sex,
    breed,
    age,
    color,
    description,
    price,
    location
  };

  // Add new listing to listings array
  listings.push(newListing);

  // Save updated listings to localStorage
  localStorage.setItem('listings', JSON.stringify(listings));

  alert("Horse listing submitted!");

  // Redirect to listings page
  window.location.href = "listings.html";
}

function renderListings() {
  const listingsContainer = document.getElementById('listings-container');
  listingsContainer.innerHTML = ''; // Clear existing listings

  listings.forEach((listing, index) => {
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

// Call renderListings when the listings page loads
if (window.location.pathname.includes('listings.html')) {
  renderListings();
}

