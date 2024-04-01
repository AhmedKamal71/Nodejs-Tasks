const express = require("express");
const app = express();
const PORT = process.env.PORT || 7000;
const PATH = require("path"); 
const FS = require("fs");
const Parser = require("body-parser")

var fileHtml = FS.readFileSync("../Client/profile.html").toString()
app.use(Parser.urlencoded({extended:true}))

app.get("*", (req, res,next) => {
    console.log("Test Middlware")
    next()
});
app.get("/main.html", (req, res) => {
    res.sendFile(PATH.join(__dirname, "../Client/main.html"))
});
app.get("/profile.html", (req, res) => {
    res.sendFile(PATH.join(__dirname, "../Client/profile.html"))
});
app.get("/style.css", (req, res) => {
    res.sendFile(PATH.join(__dirname, "../Client/style.css"))
});
app.post("/profile.html", (req, res) => {
    // res.sendFile(PATH.join(__dirname, "../Client/profile.html"))
    let data = req.body
    let username = data.user
    let mobile = data.mobile
    let address = data.address

    fileHtml = fileHtml.replace("{username}", username)
    .replace("{Address}", address)
    .replace("{MobileNumber}", mobile)
    .replace("{Email}", data.email);

    console.log(data);
    res.send(fileHtml)
});

app.all("*",(req,res)=>{
    res.send("Invalid URL");
})

app.listen(PORT, () => {
    console.log("http://localhost:" + PORT);
});
