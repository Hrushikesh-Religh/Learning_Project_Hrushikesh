import React from 'react'
import s from './display.module.css'
import { Link } from 'react-router-dom'
//-----
function Display() {
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