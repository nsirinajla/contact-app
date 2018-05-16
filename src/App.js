import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './Route'
import {BrowserRouter as Router , Link} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
           <Link to="/contact">
           <input type='button' value="Contact List"/>
           </Link>
           <Link to="/add_contact">
           <input type='button' value="Add Contact "/>
           </Link>
       <Routes/>
      </div>
         </Router>
    );
  }
}

export default App;
