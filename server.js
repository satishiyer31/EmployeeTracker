const inquirer = require('inquirer');
const express = require('express');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');
const cTable = require('console.table');

// const dotenv = require('dorenv');
// dotenv.use();

require('dotenv').config();

const app = express();

PORT = process.env.PORT || 5001

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

const db = mysql.createConnection(
   {
        host: process.env.HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME
   } ,
   console.log('Connected to the Employee Database')
);

app.listen(PORT, ()=> console.log(`Server is listening on PORT ${PORT}`));