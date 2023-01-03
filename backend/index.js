import express from "express";
import mysql from "mysql2"

const app = express()

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root123",
  database:"religh_lt",
  // port: 3306
})

app.get("/",(req,res)=>{
  res.json("backend")
})
// const express = require("express");
// const bodyParser = require('body-parser');
// const cors = require("cors");
// const mysql = require('mysql2');
// const app = express();
 
// app.use(cors());
// // parse application/json
// app.use(bodyParser.json());
  
// //create database connection
// const conn = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'root123',
//   database: 'religh_lt'
// });
 
// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });
 
// // categoryName, desc
// //add new user
// app.post('/category',(req, res) => {
//   let name = req.body.categoryName;
//   let desc = req.body.desc;
//   let sql = "INSERT INTO category values (?,?)";
//   let query = conn.query(sql, [name,desc],(err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
app.listen(3001, () => {
  console.log("Server running successfully");
});