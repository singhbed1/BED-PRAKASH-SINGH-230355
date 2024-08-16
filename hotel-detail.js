// hotel-detail.js

document.getElementById('reservationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const numberOfGuests = document.getElementById('numberOfGuests').value;

    // Example validation (you might want to add more thorough validation)
    if (!checkInDate || !checkOutDate || !numberOfGuests) {
        document.getElementById('reservationErrorMessage').style.display = 'block';
        document.getElementById('reservationErrorMessage').textContent = 'Please fill in all fields';
        return;
    }

    // Simulate reservation process
    try {
        const response = await fetch('reserve.php', { // Change to your PHP script if needed
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `hotelName=Hyatt%20Regency&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&numberOfGuests=${numberOfGuests}`
        });

        if (response.ok) {
            window.location.href = 'confirmation.html'; // Redirect to confirmation page
        } else {
            throw new Error('Reservation failed');
        }
    } catch (error) {
        document.getElementById('reservationErrorMessage').style.display = 'block';
        document.getElementById('reservationErrorMessage').textContent = error.message;
    }
});
