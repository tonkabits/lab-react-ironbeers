import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Card from './components/Card';
import beersImage from './assets/beers.png'
import randomBeer from './assets/random-beer.png'
import newBeer from './assets/new-beer.png'
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import Form from './components/Form'
import DetailBeer from './components/DetailBeer';

export default class App extends React.Component {



  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <div className="flex flex-col md:flex-row">
            <Card link={"/beers"} img={beersImage} title={"All Beers"}/>
            <Card link={"random-beer"} img={randomBeer} title={"Random Beer"}/>
            <Card link={"/new-beer"} img={newBeer} title={"New Beer"}/>

          </div>
            <Switch>
              <Route path='/beers' component={AllBeers}/>
              <Route path='/beer/:id' render={(props) => <DetailBeer  {...props}/>}/>
              <Route path='/random-beer' component={RandomBeer}/>
              <Route path='/new-beer' component={Form}/>
            </Switch>

        </Router>
      </div>
    );
  }
}
