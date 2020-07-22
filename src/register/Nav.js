import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <>
            <div className="container ">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-brand">AgriTech</div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link to="/">
                                <li className="nav-item text-secondary active">
                                    <div className = "nav-link">Home</div>
                                </li>
                            </Link>
                            <Link to="/workers1">
                                <li className="nav-item">
                                    <div className = "nav-link">Workers</div>
                                </li>
                            </Link>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Crops
              </div>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/tobacco">
                                        <div className="dropdown-item">Tobacco</div>
                                    </Link>
                                    <Link to="/paddy">
                                        <div className="dropdown-item">Rice</div>
                                    </Link>
                                </div>
                            </li>
                            <Link to="/todo">
                                <div className="nav-link">To Do</div>
                            </Link>
                            <Link to = "/attendance">
                                <li>
                                    <div className="nav-link">Attendance</div>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav;