document.addEventListener('DOMContentLoaded', () => {
    
    const availableSeats = document.querySelectorAll('.seat.available');

    
    availableSeats.forEach(seat => {
        seat.addEventListener('click', () => {
           
            seat.classList.toggle('selected');
        });
    });

    
    
    document.getElementById('bookSeats').addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        
        if (selectedSeats.length > 0) {
            let seatNumbers = [];
            selectedSeats.forEach(seat => {
                seatNumbers.push(seat.innerText); 
                seat.classList.remove('available'); 
                seat.classList.add('booked'); 
                seat.classList.remove('selected');
            });

            
            
            alert(`You have booked seats: ${seatNumbers.join()}`);
        } else {
            alert('Please select a seat!');
        }
    });
});


