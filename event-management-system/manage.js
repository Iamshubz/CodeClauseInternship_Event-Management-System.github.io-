// assume you have a JavaScript file that retrieves event data from your database or API
const eventData = {
    name: 'Event Name',
    date: 'Event Date',
    location: 'Event Location',
    registrations: [
      { name: 'John Doe', email: 'johndoe@example.com', phone: '1234567890', registrationDate: '2023-02-20' },
      { name: 'Jane Doe', email: 'janedoe@example.com', phone: '0987654321', registrationDate: '2023-02-22' },
      // ...
    ]
  };
  document.getElementById('send-button').addEventListener('click', function() {
    this.style.background = '#2ecc71'; // change button color to light green
    this.style.color = '#fff'; // change button text color to white
    setTimeout(function() {
      this.style.background = '#4CAF50'; // change button color back to green
      this.style.color = '#fff'; // change button text color back to white
    }.bind(this), 2000); // wait 2 seconds before changing back
  });
  // populate event details
  document.getElementById('event-name').textContent = eventData.name;
  document.getElementById('event-date').textContent = eventData.date;
  document.getElementById('event-location').textContent = eventData.location;
  
  // populate registrations list
  const registrationsList = document.getElementById('registrations-list');
  eventData.registrations.forEach((registration) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${registration.name}</td>
      <td>${registration.email}</td>
      <td>${registration.phone}</td>
      <td>${registration.registrationDate}</td>
    `;
    registrationsList.appendChild(row);
  });
  
  // add event listener to send button
  document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('communication-textarea').value;
    // send message to attendees using your preferred method (