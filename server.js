const express = require("express");
const fs = require("fs");
const config = require("./config.js")(fs);
const request = require("request");
const mysql = require("mysql");

const app = express();
const port = process.env.PORT || config.port;
const port_ssl = process.env.PORT || 443;

// DATABASE

var connection = mysql.createConnection({
    host: config.database.host,
    user: config.database.username,
    password: config.database.password,
    database: config.database.database
});

connection.connect(function (err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error connecting database");
    }
});

app.set('View engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

// HTTPS
const https = require("https").Server(config.ssl_options, app);
// SOCKET.IO
const io = require("socket.io")(https);

https.listen(port, function () {
    console.log("HOCTAPAZ SOCKET - Server is running on port " + port);
});

app.get('/hoctapaz.history', (req, res, next) => {
    res.render('index');
});

io.on('connection', (socket) => {
    console.log(socket.id + ' has just connected.');

});

