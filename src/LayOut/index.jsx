import React from 'react'
import { Outlet } from 'react-router'
import logo from "../assets/icons/ClearMeOut.svg"
import { Link } from "react-router-dom"

const Layout = () => {
    return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo-section">
             <img src={logo} alt="Logo"/>
          </div>
          <div className="login-button">
             Login
          </div>
          <div className="sign-up-button">
             SignUp
           </div>
          </div>
   
      </header>
      <Outlet/>
     
    </div>
       
    )
}

export default Layout
