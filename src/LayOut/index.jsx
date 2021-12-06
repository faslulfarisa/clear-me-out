import React from 'react'
import { Outlet ,useNavigate} from 'react-router-dom'
import logo from "../assets/icons/ClearMeOut.svg"
import { Link } from "react-router-dom"

const Layout = () => {
  const navigate = useNavigate();
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
          <div 
          onClick={
            ()=>{
              navigate("/sign-up")
            }
          }
            className="sign-up-button">
               SignUp
           </div>
          </div>
   
      </header>
      <div className="main-section-container">
      <Outlet/>
      </div>
     
    </div>
       
    )
}

export default Layout
