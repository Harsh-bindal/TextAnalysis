import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom"



export default function Navbar() {
  return (
      <>

<div className="topContainer">
    <Link to="/" className="topLeft">
       Home
    </Link>
    <div className="topMiddle">
        Text-analysis
    </div>
    <Link to="/About" className="topRight">
        About
    </Link>
</div>
 

    </>
      )
}
