import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
    return (
    <div className="App">
      <header>
        <h1>Header</h1>
      </header>
      <Outlet/>
     
    </div>
       
    )
}

export default Layout
