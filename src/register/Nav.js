import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <>
            <div className="container ">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">AgriTech</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <Link to="/">
                                <li class="nav-item active">
                                    <a class="nav-link">Home <span class="sr-only">(current)</span></a>
                                </li>
                            </Link>
                            <Link to="/workers1">
                                <li class="nav-item">
                                    <a class="nav-link">Workers</a>
                                </li>
                            </Link>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Crops
              </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/tobacco">
                                        <a class="dropdown-item" href="#">Tobacco</a>
                                    </Link>
                                    <Link to="/paddy">
                                        <a class="dropdown-item" href="#">Rice</a>
                                    </Link>
                                </div>
                            </li>
                            <Link to="/todo">
                                <a class="nav-link" href="#">To Do</a>
                            </Link>
                            <Link to = "/attendance">
                                <li>
                                    <a className="nav-link">Attendance</a>
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