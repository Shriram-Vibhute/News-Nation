import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export class Navbar extends Component {
    render() {
        return (
            <nav id='NavBar' className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="/">News Nation</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav text-light">
                            <li className="nav-item "><Link className="nav-link text-light" aria-current="page" to="/general">Top Headlines</Link></li>
                            <li className="nav-item "><Link className="nav-link text-light" aria-current="page" to="/business">business</Link></li>
                            <li className="nav-item "><Link className="nav-link text-light" aria-current="page" to="/entertainment">entertainment</Link></li>
                            <li className="nav-item "><Link className="nav-link text-light" aria-current="page" to="/general">general</Link></li>
                            <li className="nav-item "><Link className="nav-link text-light" aria-current="page" to="/health">health</Link></li>
                            <li className="nav-item "><Link className="nav-link text-light" aria-current="page" to="/science">science</Link></li>
                            <li className="nav-item "><Link className="nav-link text-light" aria-current="page" to="/sports">sports</Link></li>
                            <li className="nav-item "><Link className="nav-link text-light" aria-current="page" to="/technology">technology</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
