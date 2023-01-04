# Learning_Project_Hrushikesh
First learning project at Religh Technologies!

## Requirements needed to run this project 👇
+ Node JS
+ React JS
+ MySQL Server and Workbench
+ VS Code (optional)

## Steps to run this project 👍
+ Go to backend folder and inside that folder open terminal and execute the following commands.
```
npm install express mysql2 cors
```
+ Go to frontend folder and inside that folder open terminal and execute the following commands.
```
npm install axios
npm install react-router-dom
npm install react-responsive-carousel
```
+ Create a new schema in MySQL Workbench with any name.
> But connect to that database!
+ Edit these lines at the top in index.js file present in backend folder to connect to that database 
```
const db = mysql.createConnection({
  host:"localhost",
  user:"YOUR_USER_NAME",
  password:"YOUR_PASSWORD",
  database:"YOUR_DATABASE_NAME"
})
```
