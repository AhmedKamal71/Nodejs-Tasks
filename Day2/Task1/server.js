let ticket = require("./module")
let obj = new ticket();
obj.BookTicket("24", "123", "Alex", "Jaban", "2024-04-01");   // Add First Ticket
obj.BookTicket("30", "456", "Jaban", "Alex", "2024-04-05");   // Add Second Ticket
obj.update("100", "200", "Cairo", "America", "2024-04-10",2)  // Update Ticket Number 2 
obj.display()   // Display Al Tickets