import React, { useRef, useState } from 'react'
import s from './category.module.css'
import axios from 'axios';
//-----

function Category() {

  let [categoryName, setCategoryName] = useState("");
  let [catIcon, setCatIcon] = useState("");
  let [desc, setDesc] = useState("");
  let msg = useRef();
  //-----
  // console.log(categoryName);
  // console.log(desc);
  // console.log(catIcon);
  //-----
  function submit(e) {
    e.preventDefault()
    if (categoryName === "" | catIcon === "" | desc === ""){
      msg.current.style = "color: red"
      msg.current.innerHTML = "Fill all the details! 🤨"
      setTimeout(()=>{
        msg.current.style = "border: none"
        msg.current.innerHTML=""
      },3000)
    }
    else{
      axios.post("http://localhost:3001/category", {
        "categoryname": `${categoryName}`,
        "catdesp": `${desc}`,
        "image":`${catIcon}`
      })
        .then(() => {
          msg.current.style = 'color: green'
          msg.current.innerHTML = "Details Saved! ✔"
          console.log("Category details saved ✔");
          setTimeout(()=>{
            msg.current.innerHTML=""
            msg.current.style = "border: none"
          },3000)
        })
        .catch(() => {
          console.log("Error saving category details 😒");
        })
    }
  }

  //-----
  return (
    <div id={s.category}>

      <h2>Create Category</h2>

      <form id={s.form}>

        <h3>Category Name:</h3>
        <span>
          <input type="text" placeholder='Name' id={s.categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }} /></span>

        <h3>Category icon:</h3>
        <span id={s.fileInput}>
          <input type="file" accept="image/*"
            onChange={(e)=>{
              let path = e.target.value
              path = path.replace(/^.*\\/, "")
              setCatIcon(path)
            }} />
        </span>

        <textarea name="description" cols="30" rows="10" placeholder='Category Description'
          onChange={(e) => {
            setDesc(e.target.value);
          }}></textarea>

        <input type="submit" id={s.btn} onClick={submit} />
        <div id={s.msg} ref={msg}></div>
      </form>
    </div>
  )
}

export default Category