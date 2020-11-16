import React, { Component } from 'react'
import {Link} from 'react-router-dom'




class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <h3>ALCafe'</h3>
                <ul className="nav-links">
                    <Link to="about">
                        <li>Home</li>
                    </Link>
                    <Link to="shop">
                        <li>Shop</li>
                    </Link>
                    <Link to="contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="sign-up">
                        <li>Register</li>
                    </Link>       
                    
                </ul>

          </div>
        )
    }
}

export default Navbar
