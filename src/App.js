import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import data from './data.json';
import Navbar from './components/Navbar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import countryData from './data.json'
import axios from 'axios';

export default class App extends React.Component {


state = {

  countries: [],
  countriesAxios: [],
  loaded: false

}

componentDidMount() {
  const url = 'https://restcountries.com/v3.1/all'
  axios.get(url).then((response) => {
    this.setState({
      countriesAxios: response.data,
      loaded: true
    })
  }).catch(err => console.log(err))


  this.setState({
    countries: [...countryData]
  })
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
            {this.state.loaded &&
             <CountryList className=""
             // countryData={countryData}
            //  countryData={this.state.countries}
             countryData={this.state.countriesAxios}
             />
            }
            </div>
            <div className="w-2/3">
              {this.state.loaded && 
              <Route path="/:countryCode"
              render={(props) => 
                <CountryDetail 
                // countryData={countryData}
                // countryData={this.state.countries}
                countryData={this.state.countriesAxios}
                {...props}
                />
              } 
              />
            }
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
