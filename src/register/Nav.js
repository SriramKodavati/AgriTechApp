import React from 'react'
import { Link } from 'react-router-dom';
//import Calculator from './Calculator';

const Nav = () => {

    var x = "";

    const Clear = () => {
        document.getElementById("input1").value = "";
    }

    const Solve = () => {
        var equation = document.getElementById("input1").value;
		var answer = eval(equation);
		document.getElementById("input1").value += "=" + answer;
    }

    const Value = () => {
        document.getElementById("input1").value += x;
	}

    return (
        <>
            <div>
                {console.log("Calculator")}
            </div>
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
                                    <Link to="/tobacco1">
                                        <a class="dropdown-item" href="#">Tobacco</a>
                                    </Link>
                                    <Link to="/paddy">
                                        <a class="dropdown-item" href="#">Rice</a>
                                    </Link>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Others..!</a>
                                </div>
                            </li>
                            <Link to="/todo">
                                <a class="nav-link" href="#">To Do</a>
                            </Link>
                            {/* <div className="nav-item dropdown">
                            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e) => Stop(e)}>Calculator</a>
                            <Calculator></Calculator>
                        </div> */}
                            {/* <Link to="/calculator">
                            <a className="nav-link" href="#">Calculator</a>
                        </Link> */}
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#" data-toggle="modal" data-target="#calc">
                               Calculator
                           </a> */}
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#calc">
                                    Launch demo modal
                                </button>
                                <div className="modal fade" id="#calc">
          <div className="modal-content">
        <div class="card" style={{width:'300px'}}>
								<form>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xs-8">
                                                <div class="form-group">
                                                    <input class="form-control" type="text" id="input1" value="" placeholder="Enter the Number"/>
                                                </div>
                                            </div>
                                            <div class="col-xs-4 ml-1">
                                                <button type="button" class="btn btn-success" onclick={() => Clear()}>C</button>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-3">
                                                <button class="btn btn-primary" type="button" value="1"
                                                    onclick="value1('1')">1</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="2"
                                                    onclick="value1('2')">2</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="3"
                                                    onclick="value1('3')">3</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-success" type="button" value="/"
                                                    onclick="value1('/')">/</button>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-xs-3">
                                                <button class="btn btn-primary" type="button" value="4"
                                                    onclick="value1('4')">4</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="5"
                                                    onclick="value1('5')">5</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="6"
                                                    onclick="value1('6')">6</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-success" type="button" value="*"
                                                    onclick="value1('*')">*</button>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-xs-3">
                                                <button class="btn btn-primary" type="button" value="7"
                                                    onclick="value1('7')">7</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="8"
                                                    onclick="value1('8')">8</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="9"
                                                    onclick="value1('9')">9</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-success" type="button" value="+"
                                                    onclick="value1('+')">+</button>
                                            </div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-xs-3">
                                                <button class="btn btn-primary" type="button" value="."
                                                    onclick="value1('.')">.</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" value="0"
                                                    onclick="value1('0')">0</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-primary" type="button" onclick={() => Solve()}>=</button>
                                            </div>
                                            <div class="col-xs-3 ml-4">
                                                <button class="btn btn-success" type="button" value="-"
                                                    onclick={() => Value()}>-</button>
                                            </div>
                                        </div>
                                    </div>
							</form>
                                </div>
                                </div>
                                </div>
                            </li>
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