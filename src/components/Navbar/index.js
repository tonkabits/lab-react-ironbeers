import React, {useState, Component } from 'react'
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
                    Header
                </span>
                <Switch
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
                </Switch>

            </div>
        )
    }
}
