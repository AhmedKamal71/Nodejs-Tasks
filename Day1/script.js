const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url !== "/favicon.ico") {
      let operand = req.url.split("/")[1]; // Extract the operand
      let arr = req.url.split("/").map((ele) => parseInt(ele)).slice(2); // Extract Data
      let result;
      switch (operand) {
        case "add":
          result = arr.reduce((acc, curr) => {
            acc += curr;
            return acc;
          }, 0);
          break;

        case "multiply":
          result = arr.reduce((acc, curr) => {
            acc *= curr;
            return acc;
          }, 1);
          break;

        case "divide":
          result = arr.reduce((acc, curr) => {
            acc /= curr;
            return acc;
          }, 1);
          break;

        case "subtract":
          result = arr.reduce((acc, curr) => {
            acc -= curr;
            return acc;
          }, 0);
          break;

        case "mod":
          result = arr.reduce((acc, curr) => {
            acc %= curr;
            return acc;
          });
          break;

        default:
          break;
      }
      res.write(`<h1>Result Is: ${result} </h1>`);   // Write result in HTML page
      fs.appendFile("data.txt", result.toString(), (err, data) => {  // Add result to text file
        if (err) {
          console.log("There is error!!");
        } else {
          console.log("data was added successfully");
        }
      });
      console.log(result);
    }
    res.end();
  })
  .listen(7000);
