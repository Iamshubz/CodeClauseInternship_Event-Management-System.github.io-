// assume you have a JavaScript file that retrieves hotel data from your database or API
const hotelData = [
    { name: 'Hotel 1', location: 'Location 1', rating: 4, price: 100 },
    { name: 'Hotel 2', location: 'Location 2', rating: 4.5, price: 150 },
    // ...
  ];
  
  // populate hotel list
  const hotelListContainer = document.getElementById('hotel-list-container');
  hotelData.forEach((hotel) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${hotel.name}</h3>
      <p>Location: ${hotel.location}</p>
      <p>Rating: ${hotel.rating}/5</p>
      <p>Price: ${hotel.price}</p>
    `;
    listItem.addEventListener('click', () => {
      // handle hotel selection
    });
    hotelListContainer.appendChild(listItem);
  });
  
  // populate hotel select options
  const hotelSelect = document.getElementById('hotel-select');
  hotelData.forEach((hotel) => {
    const option = document.createElement('option');
    option.value = hotel.name;
    option.textContent = hotel.name;
    hotelSelect.appendChild(option);
  });
  
  // add event listener to hotel search form