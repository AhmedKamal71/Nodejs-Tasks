class Ticket {
    constructor() {
        this.arr = [];
    }
    // Booking Tickets As Much I Need 
    BookTicket(seatNum, flightNum, departureAirport, arrivalAirport, date) {
        let ticket = { seatNum, flightNum, departureAirport, arrivalAirport, date };
        this.arr.push(ticket);
    }

    // Display All Tickets I Booked
    display() {
        for (let i = 0; i < this.arr.length; i++) {
            console.log(`Ticket ${i + 1}`);
            console.log(`Seat Number Is: ${this.arr[i].seatNum}`);
            console.log(`Flight Number Is: ${this.arr[i].flightNum}`);
            console.log(`Departure Airport: ${this.arr[i].departureAirport}`);
            console.log(`Arrival Airport: ${this.arr[i].arrivalAirport}`);
            console.log(`Date: ${this.arr[i].date}`);
            console.log("----------------------------------------------------");
        }
    }

    // Edit An Specific Ticket In My Booked Tickets
    update(seatNum, flightNum, departureAirport, arrivalAirport, date, ticketNumber) {
        let ticketFound = false;
        for (let i = 0; i < this.arr.length; i++) {
            if (i === ticketNumber - 1) { 
                this.arr[i].seatNum = seatNum;
                this.arr[i].flightNum = flightNum;
                this.arr[i].departureAirport = departureAirport;
                this.arr[i].arrivalAirport = arrivalAirport;
                this.arr[i].date = date;
                ticketFound = true;
                break; 
            }
        }
        if (!ticketFound) {
            console.log("This Ticket Doesn't Exist!!");
        }
    }
}
module.exports = Ticket; 
