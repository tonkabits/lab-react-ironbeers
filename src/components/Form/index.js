import React, { Component } from 'react'


// name - must be type text
// tagline - must be type text
// description - must be type text
// first_brewed - must be type text
// brewers_tips - must be type text
// attenuation_level - must be type number !!!
//  contributed_by - must be type text

export default class Form extends Component {
    render() {
        return (
            <div>
                Form
                <form className="w-3/4">
                    <div  className="w-full px-8 mb-4">
                        <input
                            type="text" 
                            placeholder="name"
                            className="bg-gray-200 rounded mr-4 px-3"/>
                        <input
                            type="text" 
                            placeholder="tagline"
                            className="w-auto bg-gray-200 rounded  px-3"/>
                    </div>
                    <div  className="w-full px-8 mb-4">
                        <input
                            type="textarea" 
                            placeholder="description"
                            className="w-full bg-gray-200 rounded mr-4 px-3 h-32"/>
                    </div>
                    <div  className="w-full px-8 mb-4">
                        <input
                            type="text" 
                            placeholder="first brewed"
                            className="bg-gray-200 rounded mr-4 px-3"/>
                        <input
                            type="text" 
                            placeholder="brewer tips"
                            className="w-auto bg-gray-200 rounded  px-3"/>
                    </div>
                    <div  className="w-full px-8 mb-4">
                        <input
                            type="number" 
                            placeholder="attenuation"
                            className="bg-gray-200 rounded mr-4 px-3"/>
                        <input
                            type="text" 
                            placeholder="contributed by"
                            className="w-auto bg-gray-200 rounded  px-3"/>
                    </div>
                </form>
            </div>
        )
    }
}
