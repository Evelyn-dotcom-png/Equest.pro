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

// Sample user database stored in localStorage
// Note: In a real app, password should be hashed and stored securely
const users = JSON.parse(localStorage.getItem('users')) || [];

// Sign-up Function
function handleSignup(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validate username and password
  if (!username || !password) {
    alert('Username and password are required.');
    return;
  }

  // Check if the username already exists
  if (users.find(user => user.username === username)) {
    alert('Username already exists!');
    return;
  }

  // Add new user to the database (localStorage)
  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert('Sign-up successful!');
  window.location.href = 'login.html'; // Redirect to login page
}

// Login Function
function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Validate username and password
  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  // Find the user in the localStorage database
  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    alert('Invalid username or password');
    return;
  }

  // Successful login, set user session (using localStorage for demo purposes)
  localStorage.setItem('currentUser', username);

  alert('Login successful!');
  window.location.href = 'index.html'; // Redirect to homepage or dashboard
}

// Attach events to forms
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

if (signupForm) {
  signupForm.addEventListener('submit', handleSignup);
}

if (loginForm) {
  loginForm.addEventListener('submit', handleLogin);
}

// Check if user is already logged in (e.g., on homepage)
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    alert(`Welcome back, ${currentUser}!`);
  }
});
<script src="app.js"></script>
