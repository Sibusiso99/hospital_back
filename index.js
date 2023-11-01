const express = require("express");

const mysql = require("mysql");

const bcrypt = require("bcrypt");


const app = express();

app.use(express);

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'hospital_management'
});


connection.connect((error) => {
    if(error){
        console.error('Error connecting to the Database', error);
    }else{
        console.log('Connected!!')
    }
})