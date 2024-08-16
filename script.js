document.getElementById('searchButton').addEventListener('click', function() {
    const destination = document.getElementById('destinationInput').value.toLowerCase();
    const hotels = document.querySelectorAll('.hotel-card');
    
    hotels.forEach(hotel => {
        if (destination === 'kathmandu') {
            if (hotel.getAttribute('data-location').toLowerCase() === 'kathmandu') {
                hotel.style.display = 'block';
            } else {
                hotel.style.display = 'none';
            }
        } else {
            hotel.style.display = 'block';
        }
    });
});
