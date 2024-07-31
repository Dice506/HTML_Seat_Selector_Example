// JavaScript for handling seat selection and dynamic controls

document.querySelectorAll('.seat.available').forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
  });
});

window.addEventListener('resize', () => {
  adjustControlsForScreenSize();
});

// Initial adjustment
adjustControlsForScreenSize();

function adjustControlsForScreenSize() {
  const isMobile = window.innerWidth <= 768;
  if (isMobile) {
    document.querySelector('.controls').classList.add('mobile');
  } else {
    document.querySelector('.controls').classList.remove('mobile');
  }
}

document.getElementById('book-btn').addEventListener('click', () => {
  const selectedSeats = document.querySelectorAll('.seat.selected');
  if (selectedSeats.length > 0) {
    alert(`You have booked ${selectedSeats.length} seat(s).`);
    selectedSeats.forEach(seat => seat.classList.remove('selected'));
  } else {
    alert('Please select at least one seat.');
  }
});
