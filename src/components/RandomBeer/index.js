import React, { Component } from 'react'
import IRON_BEERS_SERVICE from '../../services/IronBeersService'




export default class RandomBeer extends Component {

state = {
    beer: {}
}

fetchBeer = () => {
    console.log(this.props);
    IRON_BEERS_SERVICE.getRandomBeer()
        .then( randomBeer => {
            console.log(randomBeer)
            this.setState({
                beer: randomBeer.data
            })
        })
        .catch(err => console.log(err))

}

componentDidMount() {
    this.fetchBeer()
}


    render() {
        return (
            <div>
                <h1 className="text-4xl text-left ml-6">Detail Beer</h1>
                <div className="w-full flex">
                    <div className="w-1/3 flex justify-center ">
                        <img className="w-32" src={this.state.beer.image_url} />
                    </div>
                    <div className="w-2/3 bg-grey-50">
                        <div className="px-2 py-4">
                            <div className="flex flex-col items-start">
                                <label className="text-xs ml-2 uppercase text-gray-400 font-bold">
                                    name
                                </label>
                                <p className=" ml-2 text-2xl">
                                    {this.state.beer.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
