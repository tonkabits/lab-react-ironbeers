import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ListItem extends Component {
    

    
    render() {
        return (
            <div className="w-full text-left h-12 ">
                <Link to={this.props.country.ccn3}>
                    <span className="w-12 h-12 mr-4 " style={{ content: '01F1E6'}}>
                        {this.props.country.flag}
                    </span>
                    {this.props.country.name.common}
                    <br/>
                </Link>
            </div>
        )
    }
}
