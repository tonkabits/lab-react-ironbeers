import React from "react";
import { Link, Route } from "react-router-dom";


const BeerCard = (props) => {
    return (
        <>
            <div className="w-1/6 p-2">
            <Link to={"beer/"+props._id} >
                    <div className="rounded-lg bg-gray-100 relative">
                        <div className="rounded flex justify-center pt-4">
                            <img src={props.img} alt="any" className="w-20 rounded-lg" />
                        </div>

                        {/* <div className="absolute top-0 right-0">
                            <p className={props.isStudent ? "ml-2 rounded px-2 py-1 bg-red-200 text-red-800 m-3" : "ml-2 rounded px-2 py-1 bg-green-200 text-green-800 m-3"}>
                                <span className="text-xs">
                                    {props.isStudent ? 'student' : 'teacher'}
                                </span>
                            </p>
                        </div> */}
                        <div className="px-2 py-4">
                            <div className="flex flex-col items-center">
                                <label className="text-xs uppercase text-gray-400 font-bold">
                                    name
                                </label>
                                <p className=" ml-2 text-2xl">
                                    {props.name}
                                </p>
                            </div>
                        </div>
                    </div>
                </Link>
                <Route path="" />
            </div>
        </>
    )
}

export default BeerCard