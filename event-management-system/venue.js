// assume you have a JavaScript file that retrieves venue data from your database or API
const venueData = [
    { name: 'Venue 1', location: 'Location 1', capacity: 200, price: 1000, image: 'venue1.jpg' },
    { name: 'Venue 2', location: 'Location 2', capacity: 300, price: 1500, image: 'venue2.jpg' },
    // ...
  ];
  
  // populate venue list
  const venueListContainer = document.getElementById('venue-list-container');
  venueData.forEach((venue) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <img src="${venue.image}" alt="${venue.name}" width="150">
      <div>
        <h3>${venue.name}</h3>
        <p>Location: ${venue.location}</p>
        <p>Capacity: ${venue.capacity}</p>
        <p>Price: ${venue.price}</p>
      </div>
    `;
    listItem.addEventListener('click', () => {
      // handle venue selection
    });
    venueListContainer.appendChild(listItem);
  });
  
  // add event listener to venue search form
  document.getElementById('venue-search-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const searchTerm = document.getElementById('venue-search-input').value;
    // search venues using your preferred method
  });