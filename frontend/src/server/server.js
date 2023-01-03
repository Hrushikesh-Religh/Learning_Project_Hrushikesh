const express = require("express");
// const bodyParser = require('body-parser');
// const cors = require("cors");
const port = process.env.port || 3000;
const app = express();
 
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'religh_lt'
});

 conn.connect(function(err){
  (err)? console.log(err):console.log(conn);
 })

app.listen(port, ()=>{
  console.log("Running");
});
// app.use(cors());
// // parse application/json
// app.use(bodyParser.json());
  
// //create database connection
// //connect to database
// conn.connect((err) =>{
//   if(err) throw err;
//   console.log('Mysql Connected...');
// });
 
 
// //add new category
// app.post('/category',(req, res) => {
//   let data = {name: req.body.name};
//   let sql = "INSERT INTO category SET ?";
//   let query = conn.query(sql, data,(err, results) => {
//     if(err) throw err;
//     res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
//   });
// });
 
// app.listen(3000, () => {
//   console.log("Server running successfully on 3000");
// });