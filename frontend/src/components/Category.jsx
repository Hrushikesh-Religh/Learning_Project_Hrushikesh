import React, { useState } from 'react'
import s from './category.module.css'
import axios from 'axios';
//-----

function Category() {

  let [categoryName, setCategoryName] = useState("");
  let [catIcon, setCatIcon] = useState();
  let [desc, setDesc] = useState("");
  //-----
  console.log(categoryName);
  console.log(catIcon);
  console.log(desc);
  //-----
  function submit(e) {
    // let payload = { categoryName, desc }
    axios.post("http://localhost:3000/category", categoryName)
      .then(() => {
        console.log("Data saved ✔");
      })
      .catch(() => {
        console.log("Error 😒");
      })
    e.preventDefault()
  }
  //-----
  const getImage = (e) => {
    let value = (e.target.files[0]);
    setCatIcon([value]);
  }
  //-----
  return (
    <div id={s.category}>
      <h2>Create Category</h2>
      <form action="" id={s.form}>
        <h3>Category Name:</h3>
        <span><input type="text" placeholder='Name' id={s.categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
          }} /></span><br />
        <h3>Category icon:</h3>
        <span id={s.fileInput}><input type="file" accept="image/png, image/jpeg, image/ico"
          onChange={getImage} /></span><br />
        <textarea name="description" id="" cols="30" rows="10" placeholder='Category Description'
          onChange={(e) => {
            setDesc(e.target.value);
          }}></textarea><br />
        <input type="submit" id={s.btn} onClick={submit} />
      </form>
    </div>
  )
}

export default Category