import React from 'react';
import './App.css';
import Workers1 from './register/Workers1';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './register/Nav';
import Home from './register/Home';
import Todo from './register/Todo';
import Attendance from './register/Attendance';
import Crops from './register/Crops';


function App() {
  return (
    <Router>
    <div className="App ">
       <Nav />
       <Switch>
       <Route path="/" component={Home} exact></Route>
       <Route path="/workers1" component={Workers1}></Route>
       <Route path="/todo" component={Todo}></Route>
       <Route path="/tobacco" component={() => <Crops name = {"Tobacco"}/>}></Route>
       <Route path="/paddy" component={() => <Crops name = {"Paddy"}/>}></Route>
       <Route path="/attendance" component={Attendance}></Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;