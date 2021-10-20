import React, { Component } from 'react'
import BeerCard from '../BeerCard'
import IRON_BEERS_SERVICE from '../../services/IronBeersService'
export default class AllBeers extends Component {

    state = {
        beers: [],
    
    }

    fetchAllBeers = () => {
        IRON_BEERS_SERVICE.listAllBeers()
            .then( allBeers => {

                console.log(allBeers)
                this.setState({
                    beers: allBeers
                })
            })
            .catch()
    }

    componentDidMount = () => {
        this.fetchAllBeers()
    }



    render() {
        return (
            <div>
                <h1 className="text-4xl text-left ml-6">All beers</h1>
                <div className="flex flex-wrap">
                    {this.state.beers.map((beer, index) => {

                        return <BeerCard
                            _id={beer._id}
                            img={beer.image_url}
                            name={beer.name}
                       
                        />
                    })}

                </div>
            </div>
        )
    }
}
