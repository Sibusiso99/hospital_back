const express = require("express");

const mysql = require("mysql");

const bcrypt = require("bcrypt");


const app = express();

app.use(express);

// connecting to the database

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

//registering a doctor
app.post("/doctor_registration", (req,res) =>{
    const {id_no,name,surname,user_name,password} =  req.body;
    bcrypt.hash(password,15).then((hash) =>{
        

        })
})