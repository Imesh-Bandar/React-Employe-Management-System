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
const Connection=mysql.createConnection({
    //
})

