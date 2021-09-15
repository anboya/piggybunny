import React, { Component } from 'react'
import HomeVideo from './HomeVideo';
import IntroWeb from './IntroWeb';
import IntroAnimal from './IntroAnimal';
import Feed from './Feed';
import Keyfactor from './Keyfactor';




export default class Home extends Component {
    // state = {
    //     current: 0
    // }
   
    render() {
  
        return (
            <div className='home'>
                <HomeVideo />
                <div className='middle'  style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <IntroWeb />
                    <IntroAnimal />
                    <Feed />
                    <Keyfactor />                   
                </div>
            </div>
        )
    }
}
