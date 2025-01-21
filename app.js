const horseListings = [];

function submitListing(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const sex = document.getElementById('sex').value;
  const breed = document.getElementById('breed').value;
  const age = document.getElementById('age').value;
  const color = document.getElementById('color').value;
  const description = document.getElementById('description').value;
  const price = document.getElementById('price').value;
  const contact = document.getElementById('contact').value;
  const photo = document.getElementById('photo').files[0];

  const newHorse = {
    name,
    sex,
    breed,
    age,
    color,
    description,
    price,
    contact,
    photo
  };

  horseListings.push(newHorse);
  alert("Horse listing submitted!");

  // Redirect to listings page
  window.location.href = "listings.html";
}

function displayListings() {
  const horseListContainer = document.getElementById('horseList');
  horseListContainer.innerHTML = '';

  horseListings.forEach(horse => {
    const horseCard = document.createElement('div');
    horseCard.classList.add('horseCard');
    horseCard.innerHTML = `
      <h3>${horse.name}</h3>
      <img src="${URL.createObjectURL(horse.photo)}" alt="${horse.name}">
      <p><strong>Breed:</strong> ${horse.breed}</p>
      <p><strong>Age:</strong> ${horse.age}</p>
      <p><strong>Price:</strong> $${horse.price}</p>
      <p><strong>Contact:</strong> ${horse.contact}</p>
    `;
    horseListContainer.appendChild(horseCard);
  });
}

// Call this function to display listings when the page loads
if (window.location.pathname.includes('listings.html')) {
  displayListings();
}
const horseListings = [];

function submitListing(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const sex = document.getElementById('sex').value;
  const breed = document.getElementById('breed').value
// Get form and listings container
const form = document.querySelector('#listing-form'); // Replace with your form's ID
const listingsContainer = document.querySelector('#listings-container'); // Replace with your listings container's ID

// Load existing listings from localStorage
const listings = JSON.parse(localStorage.getItem('listings')) || [];

// Function to render listings on the listings page
function renderListings() {
  if (listingsContainer) {
    listingsContainer.innerHTML = ''; // Clear existing listings
    listings.forEach(listing => {
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
}

// Save new listing to localStorage
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const newListing = {
      name: formData.get('name'),
      sex: formData.get('sex'),
      breed: formData.get('breed'),
      age: formData.get('age'),
      color: formData.get('color'),
      description: formData.get('description'),
      price: formData.get('price'),
      location: formData.get('location')
    };
    listings.push(newListing);
    localStorage.setItem('listings', JSON.stringify(listings)); // Save to localStorage
    alert('Listing submitted successfully!');
    form.reset(); // Reset form
  });
}

// Render listings on page load
renderListings();
