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

// getting category data
app.get("/category",(req,res)=>{
  const query = "select * from category"
  db.query(query,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

// posting category data
app.post("/category",(req,res)=>{
  const query = "insert into category (`categoryname`,`catdesp`,`image`) values(?)"
  const values = [
    req.body.categoryname,
    req.body.catdesp,
    req.body.image
  ]
  db.query(query,[values], (err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

// getting searched data
app.get("/product/:search",(req,res)=>{
  const query = `select * from product where productname like lower("%${[req.params.search]}%")`
  db.query(query,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

// getting product data
app.get("/product",(req,res)=>{
  const query = "select * from product"
  db.query(query,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

// posting product data
app.post("/product",(req,res)=>{
  const query = "insert into product (`productname`,`category`,`catdesp`,`features`,`image`) values(?)"
  const values = [
    req.body.productname,
    req.body.category,
    req.body.catdesp,
    req.body.features,
    req.body.image
  ]
  db.query(query,[values], (err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})
 
// getting category specific product data
app.get("/category/:id",(req,res)=>{
  const query = `select * from product where category in (select categoryname from category where id = ${[req.params.id]})`
  db.query(query,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.listen(3001, () => {
  console.log("Server running successfully");
});