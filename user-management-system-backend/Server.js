//Import express
const express = require('express');
//Import mysql
const mysql = require('mysql');
//Import Cookiepaser
const cookieParser = require("cookie-parser");
//Import bcript for encrypt Password
const bcrypt = require('bcrypt');
//Import cors
const cors = require('cors');
//Import jwt
const jwt = require('jsonwebtoken');


const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Create mysql Database Connection 
const Database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeemanagement'

})
//Server PORT
const HTTP_PORT = 8082;

//Connect to database

Database.connect((err) => {
    if (err) {
        console.log(`Error connecting ${err}`);

    } else {
        console.log(`Database Connected.`);
    }
});



//server create
app.listen(HTTP_PORT, () => {
    console.log(`Server is running on ${HTTP_PORT}`);

});



