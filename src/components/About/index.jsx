import React, { Component } from 'react'
import IntroPeople from './IntroPeople'
import Skills from './Skills'
import Work from './Work'
import './index.css'


export default class About extends Component {
    render() {
        return (
            <div className='about'>
                <IntroPeople />
                <Skills />
                <Work />
                <div id="bottom"></div>
            </div>
        )
    }
}
