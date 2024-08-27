// Define seat structure
const seats = [
    { id: 1, status: 'available' },
    { id: 2, status: 'booked' },
    { id: 3, status: 'available' },
    { id: 4, status: 'unavailable' },
    { id: 5, status: 'available' },
    { id: 6, status: 'booked' },
    { id: 7, status: 'available' },
    { id: 8, status: 'available' },
    { id: 9, status: 'available' },
    { id: 10, status: 'booked' },
    { id: 11, status: 'available' },
    { id: 12, status: 'unavailable' },
    { id: 13, status: 'available' },
    { id: 14, status: 'available' },
    { id: 15, status: 'available' },
    { id: 16, status: 'booked' }
];

let selectedSeats = [];

// Function to render seats
function renderSeats() {
    const seatMap = document.getElementById('seat-map');
    seatMap.innerHTML = ''; // Clear previous seats

    seats.forEach(seat => {
        const seatDiv = document.createElement('div');
        seatDiv.classList.add('seat');
        seatDiv.textContent = seat.id;

        // Set seat class based on its status
        if (seat.status === 'booked') {
            seatDiv.classList.add('booked');
        } else if (seat.status === 'unavailable') {
            seatDiv.classList.add('unavailable');
        } else if (selectedSeats.includes(seat.id)) {
            seatDiv.classList.add('selected');
        }

        // Event listener for selecting seats
        seatDiv.addEventListener('click', () => handleSeatClick(seat.id));

        seatMap.appendChild(seatDiv);
    });
}

// Handle seat click
function handleSeatClick(id) {
    const seat = seats.find(s => s.id === id);

    if (seat.status === 'booked' || seat.status === 'unavailable') {
        alert('This seat is not available!');
        return;
    }

    // Toggle seat selection
    if (selectedSeats.includes(id)) {
        selectedSeats = selectedSeats.filter(seatId => seatId !== id);
    } else {
        selectedSeats.push(id);
    }

    renderSeats();
    updateSelectedSeats();
    toggleConfirmButton();
}

// Update selected seats display
function updateSelectedSeats() {
    const selectedSeatsText = selectedSeats.join(', ');
    document.getElementById('selected-seats').textContent = `Selected Seats: ${selectedSeatsText || 'None'}`;
}

// Toggle confirm button based on selections
function toggleConfirmButton() {
    const confirmButton = document.getElementById('confirm-button');
    confirmButton.disabled = selectedSeats.length === 0;
}

// Confirm booking
function confirmBooking() {
    selectedSeats.forEach(seatId => {
        const seat = seats.find(s => s.id === seatId);
        seat.status = 'booked';
    });

    selectedSeats = [];
    renderSeats();
    updateSelectedSeats();
    toggleConfirmButton();
}

// Initialize seat map and confirm button event
renderSeats();
document.getElementById('confirm-button').addEventListener('click', confirmBooking);
