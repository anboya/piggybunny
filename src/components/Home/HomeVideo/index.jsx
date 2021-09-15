import React, { Component } from 'react'
import running from '../../../uploads/running.mp4'

export default class HomeVideo extends Component {
    render() {
        return (
            <video autoPlay="autoPlay" loop="loop" muted style={{ marginTop: -120,width:'100%' }}>
                <source src={running}/>
            </video>
        )
    }
}
