import React from "react"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            
            <h1 style={{fontSize:'50px', color:'white'}}>welcome home</h1>
            <div>
            <Link to="/LoginForm" style={{color:'white', fontSize:'30px'}}>LoginForm</Link><br />
            <Link to="/SignupForm" style={{color:'white', fontSize:'30px'}}>SignupForm</Link><br />
            <Link to="/Todo" style={{color:'white', fontSize:'30px'}}>Todo</Link>
            </div>
        </>
    )
}

export default Home;