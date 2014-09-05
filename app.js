var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
});

console.log('Host : ' + process.env.DB_HOST);
console.log('User : ' + process.env.DB_USER);
console.log('Pass : ' + process.env.DB_PASS);
console.log('DB   : ' + process.env.DB_NAME);

connection.query('select * from RECIPE', function (err, rows) {
        if (err) {
                console.log(err);
        } else {
                console.log('Got entries on RECIPE table');
                console.log(rows);
        }
});

connection.query('select * from MUSIC', function (err, rows) {
        if (err) {
                console.log(err);
        } else {
                console.log('Got entries on MUSIC table');
                console.log(rows);
        }
});
