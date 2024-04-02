const express = require("express");
const http = require("http");
const { Server } = require("socket.io"); 
const ejs = require("ejs"); 
const path = require("path"); 

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 7000;

app.engine('html', ejs.renderFile);
app.set('view engine', 'html'); 
app.set('views', path.join(__dirname, 'views')); 

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
    res.render('index'); 
});

app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname,'script.js'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('chat message', (data) => {
        io.emit('chat message', data);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
