import React, { Component } from 'react'
import { Divider } from 'antd'
export default class IntroWeb extends Component {
    render() {
        return (
            <div style={{width:1000,marginTop:50}}>
                <h1 style={{marginBottom:50}}>Home</h1>
                <p style={{fontSize:18 ,fontStyle:'italic'}}>Piggy & Bunny is a website designed to introduce our two little pets.
                    They are Tutu (bunny) and Zhuzhu (piggy).
                    Me and Arren have been raising them for about one year. They have become very important members of our family and have brought us countless joys.
                 </p>
                <Divider style={{marginTop:80,borderWidth:1,borderColor:'rgba(0,0,0,.3)'}}></Divider>
            </div>
        )
    }
}
