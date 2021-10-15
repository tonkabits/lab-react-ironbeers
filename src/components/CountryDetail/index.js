import React, { Component } from 'react'

export default class CountryDetail extends Component {
    
   test = () => {
       console.log(this.props)
   } 

   
   render() {
       const countryCode = this.props.match.params.countryCode
       const countryDetails = this.props.countryData.find(
           (country) => country.cca3 === countryCode
       )
       console.log(countryDetails)
        return (
            <div className="p-10 text-left">
                <h2 className="text-4xl text-left font-bold mb-8">
                    {countryDetails.name.common}
                </h2>
                <p className="h-12 flex items-center">Capital: <span className="text-xl ml-12 font-bold">
                    {countryDetails.capital} 
                </span> 
                    </p>
                <hr/>
                <p className="h-12 flex items-center">Area: <span className="text-xl ml-12 font-bold">
                    {countryDetails.area} </span>
                
                </p>
                <hr/>
                <p className="h-12 flex items-center">Borders:</p>
            </div>
        )
    }
}
