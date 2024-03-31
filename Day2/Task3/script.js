const http = require("http")
const fs = require("fs")

let homeHtml = fs.readFileSync("home.html","utf-8")
let favIcon = fs.readFileSync("icons/icon.ico")
let style = fs.readFileSync("style.css","utf-8")
let welcomeHtml = fs.readFileSync("welcome.html","utf-8")
http.createServer((req, res) => {
    if (req.method == "GET") {
        switch (req.url) {
            case "/":
            case "/home.html":
                res.setHeader("Content-Type", "text/html");
                res.write(homeHtml)
                break;
            case "/style.css":
                res.setHeader("Content-Type", "text/css");
                res.write(style);
                break;
            case "/icon.ico":
            case "/icons/icon.ico":
                res.setHeader("Content-Type", "image/vnd.microsoft.icon");
                res.write(favIcon);
                break;
            default:
                if (req.url.includes("welcome.html")) {
                    res.setHeader("Content-Type", "text/html");
                    res.write(welcomeHtml)
                }
                else
                    res.write("Invalid URL !!")
                break;
        }
        res.end()
    }
    else if (req.method == "POST") {
        let username = "";
        let Email = "";
        let Address = "";
        let mobile = "";

        req.on("data", (data) => {
            userData = data.toString();
            username = userData.split("&")[0].split("=")[1];
            mobile = userData.split("&")[1].split("=")[1];
            Address = userData.split("&")[2].split("=")[1];
            Email = userData.split("&")[3].split("=")[1];
            saveToDb(username, mobile, Address, Email);

        });

        req.on("end", () => {
            res.setHeader("Content-Type", "text/html");
            let newFile = welcomeHtml.replace("{username}", username)
            newFile = newFile.replace("{Email}", Email)
            newFile = newFile.replace("{MobileNumber}", mobile)
            newFile = newFile.replace("{Address}", Address)
            res.write(newFile);
            res.end();
        })

        req.on("error", () => { console.log("Error") })
        req.on("close", () => {
            console.log("Closed")
        })
    }

    else {
        res.end("Please Check ur Method [GET- POST - PATCH - PUT - DELETE]")
    }

}).listen(7000, () => { console.log("http://localhost:7000") })