document.getElementById('searchButton').addEventListener('click', function() {
    const destination = document.getElementById('destinationInput').value.toLowerCase();
    const hotels = document.querySelectorAll('.hotel-card');
    let found = false; // To track if any hotel matches the search

    hotels.forEach(hotel => {
        const hotelLocation = hotel.getAttribute('data-location').toLowerCase();
        
        if (destination === 'kathmandu' || destination === 'lalitpur' || destination === 'biratnagar') {
            if (hotelLocation === destination) {
                hotel.style.display = 'block';
                found = true; // Hotel found for the given location
            } else {
                hotel.style.display = 'none';
            }
        } else {
            hotel.style.display = 'block';
            found = true; // Display all hotels if no specific destination is entered
        }
    });

    // Show the "Sorry, not available" message if no hotels match
    const noHotelsMessage = document.getElementById('noHotelsMessage');
    if (!found) {
        noHotelsMessage.style.display = 'block';
    } else {
        noHotelsMessage.style.display = 'none';
    }
});
