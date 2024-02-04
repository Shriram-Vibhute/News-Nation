import React, { Component } from 'react'
import './Spinner.css'

export class Spinner extends Component {
    render() {
        return (
            <div className='container Loading'>
                <span className="loader"></span>
            </div>
        )
    }
}

export default Spinner