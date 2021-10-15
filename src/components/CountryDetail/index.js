import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CountryDetail extends Component {
    

    // getCountryFullName = abv => {
    //   return  (this.props.countryData.find(country => 
    //         abv.border === country.cca3
         
            
    //     )
    //     )

    
        
    // }


    findBorderingCountries = (countryDetails) => {
        countryDetails.borders.map((border) => {
            // let full =  this.getCountryFullName({border})
            return <Link to={border}>
                        {border}
                    </Link>
        })        
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
                <div className="w-full flex items-center">
                    <div className="w-1/4">
                        <p className="h-12 flex items-center">Capital: 
                        </p>
                        
                    </div>
                    <div className="w-3/4">
                        <span className="text-xl font-bold">
                            {countryDetails.capital} 
                        </span> 
                    </div>
                </div>
                <hr />
                <div className="w-full flex items-center">
                    <div className="w-1/4">
                        <p className="h-12 flex items-center">Area:
                        </p>
                        
                    </div>
                    <div className="w-3/4">
                        <span className="text-xl font-bold">
                            {countryDetails.area} </span>
                    </div>
                </div>
                <hr />
                <div className="w-full flex items-center">
                    <div className="w-1/4">
                        <p className="h-12 flex items-center">Borders:</p> 
                    </div>
                    <div className="w-3/4">
                        <span className="text-xl font-bold">
                            {countryDetails.borders && countryDetails.borders.length > 0  ?
                            countryDetails.borders.map((border) => {
                                // let full =  this.getCountryFullName({border})
                                return  <div>
                                <Link to={border}>
                                {border}
                                    </Link>
                                </div>
                            }): 'no borders'}  
                            {/* {this.findBorderingCountries({countryDetails})} */}
                            
                        </span>
                    </div>
                </div>
                <hr/>
              
            </div>
        )
    }
}
