import React from 'react'
import {Link} from 'react-router-dom'


export default function Card(props) {

    return (
        <div className="w-full text-center lg:w-1/3 lg:text-left p-4">
            <Link to={props.link}>
            <div className="bg-gray-50 rounded">
                    <img src={props.img} className="w-full md:h-36 bg-red-500 rounded-t-lg  bg-auto" />
                <div className="text-2xl p-4">{props.title}</div>
                <div className="text-sm text-gray-600 px-4">

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu velit turpis. Aenean eget dictum era</div>
            </div>
            </Link>
        </div>
    )
}
