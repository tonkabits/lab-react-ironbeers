import React, {useState, Component } from 'react'
import Router, {Link} from 'react-router-dom'
import { Switch } from '@headlessui/react'

export default class Navbar extends Component {
    state={
        enabled: true,
    }
    
    setEnabled = () => {
        this.setState({
            enabled: !this.state.enabled
        })
    }

    render() {
        return (
            <div className="w-full flex items-center text-left px-8 bg-blue-500 h-16 text-3xl text-white">
                <span className="mr-4">
                   Ironbeers
                </span>
                <Link to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </Link>
                {/* <Switch
                    checked={this.state.enabled}
                    onChange={this.setEnabled}
                    className={`${this.state.enabled ? 'bg-yellow-600' : 'bg-gray-200'
                        } relative inline-flex items-center h-5 rounded-full w-10`}
                >
                    <span className="sr-only">Enable notifications</span>
                    <span
                        className={`${this.state.enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-3 h-3 transform bg-white rounded-full`}
                    />
                </Switch> */}

            </div>
        )
    }
}
