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
