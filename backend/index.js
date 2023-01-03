import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root123",
  database:"religh_lt",
  // port: 3306
})

app.use(express.json())
app.use(cors())


app.get("/category",(req,res)=>{
  const query = "select * from category"
  db.query(query,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.post("/category",(req,res)=>{
  const query = "insert into category (`categoryname`,`catdesp`) values(?)"
  const values = [
    req.body.categoryname,
    req.body.catdesp
  ]
  
  db.query(query,[values], (err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})


app.get("/product",(req,res)=>{
  const query = "select * from product"
  db.query(query,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.get("/product/:category",(req,res)=>{
  const query = "select * from product where category = ?"
  db.query(query,[req.params.category],(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})


app.post("/product",(req,res)=>{
  const query = "insert into product (`productname`,`category`,`catdesp`,`features`) values(?)"
  const values = [
    req.body.productname,
    req.body.category,
    req.body.catdesp,
    req.body.features
  ]
  
  db.query(query,[values], (err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

//-----
app.get("/",(req,res)=>{
  res.json("backend")
})
 
app.listen(3001, () => {
  console.log("Server running successfully");
});