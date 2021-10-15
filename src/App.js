import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data.json';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import countryData from './data.json'


export default class App extends React.Component {


state = {



}



updateSearchTerm = event => {
  console.log('updated')
  this.setState({
    searchInput: event.target.value
  })

  return this.filterFoodList()
}


  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <div className="w-full flex">
            <div className="w-1/3 h-screen overflow-scroll bg-gray-50">
             <CountryList className=""
                countryData={countryData}
             />
            </div>
            <div className="w-2/3">
     
              <Route path="/:countryCode"
              render={(props) => 
                <CountryDetail 
                  countryData={countryData}
                  {...props}
                />
              }
              />
       
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
