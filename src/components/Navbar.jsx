    import React from 'react'
    import { Link } from 'react-router'

    function Navbar() {
    return (
    <>
    <nav>
        <div className="logo-container">Budget<span className='yellow'>Buddy</span></div>
        <div className="links">
            <Link to="/home">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/login">Login</Link>
        </div>
    </nav>
    </>
    )
    }

    export default Navbar
