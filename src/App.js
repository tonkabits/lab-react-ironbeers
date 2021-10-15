import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

export default class App extends React.Component {



  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
        </Router>
      </div>
    );
  }
}
