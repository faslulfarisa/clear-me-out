import React from 'react'
import { Outlet ,useNavigate} from 'react-router-dom'
import logo from "../assets/icons/ClearMeOut.svg"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

const Layout = () => {
  const navigate = useNavigate();
  const  isLoggedIn = useSelector(state=>state.isLoggedIn)
  const dispatch =useDispatch()
    return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo-section">
             <img src={logo} alt="Logo"/>
          </div>
          {!isLoggedIn?<>
          <div 
          onClick={
            ()=>{
              navigate("/login")
            }
          }
          className="login-button">
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
          </>:
          <div onClick={()=>{
             dispatch({
               type:"LogOut"
             })
          }} className="sign-up-button">LogOut</div>
          }
        </div>
      </header>
      <div className="main-section-container">
      <Outlet/>
      </div> 
    </div>
       
    )
}

export default Layout
