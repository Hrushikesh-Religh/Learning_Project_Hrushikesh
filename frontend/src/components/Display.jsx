import React, { useEffect } from 'react'
import s from './display.module.css'
import { Link, useNavigate } from 'react-router-dom'
//-----
function Display() {

  let nav = useNavigate();
  useEffect(()=>{
    nav("/main");
    console.log("Loaded");
  },[])

  return (
    <div id={s.display}>
      <div id={s.sideBar}>
        <Link to='/main'>Home Page</Link>
        <Link to='/category'>Create Category</Link>
        <Link to='/product'>Create Product</Link>
      </div>
    </div>
  )
}

export default Display