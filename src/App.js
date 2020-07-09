import React from 'react';
import './App.css';
import Workers1 from './register/Workers1';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './register/Nav';
import Home from './register/Home';
import Tobacco1 from './register/Tobacco1';
import Todo from './register/Todo';
import Paddy from './register/Paddy';
import Calculator from './register/Calculator';
import Attendance from './register/Attendance';


function App() {
  return (
    <Router>
    <div className="App ">
       <Nav />
       <Switch>
       <Route path="/" component={Home} exact></Route>
       <Route path="/workers1" component={Workers1}></Route>
       <Route path="/todo" component={Todo}></Route>
       <Route path="/tobacco1" component={Tobacco1}></Route>
       <Route path="/paddy" component={Paddy}></Route>
       <Route path="/calculator" component={Calculator}></Route>
       <Route path="/attendance" component={Attendance}></Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;