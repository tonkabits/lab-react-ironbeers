import React, { Component } from 'react'
import ListItem from '../ListItem'

export default class CountryList extends Component {

    


    render() {
        return (
            <div className="px-8 pt-10">
                {this.props.countryData.map((country) => {
                    console.log(country.name.common)
                    return <ListItem
                            country={country}
                    >
                        </ListItem>
                })}
            </div>
        )
    }
}
