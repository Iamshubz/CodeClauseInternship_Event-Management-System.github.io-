// assume you have a JavaScript file that retrieves catering package data from your database or API
const cateringPackages = [
    { name: 'Package 1', description: 'Description 1', price: 500 },
    { name: 'Package 2', description: 'Description 2', price: 1000 },
    // ...
  ];
  
  // populate catering packages list
  const cateringPackagesList = document.getElementById('catering-packages-list');
  cateringPackages.forEach((package) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <h3>${package.name}</h3>
      <p>${package.description}</p>
      <p>Price: ${package.price}</p>
    `;
    listItem.addEventListener('click', () => {
      // handle catering package selection
    });
    cateringPackagesList.appendChild(listItem);
  });
  
  // add event listener to custom catering form
  document.getElementById('custom-catering-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const eventType