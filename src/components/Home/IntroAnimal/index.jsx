import React, { Component } from 'react'
import { Row, Col } from 'antd';
import piggyImg from '../../../uploads/piggy.png'
import bunnyImg from '../../../uploads/bunny.png'
export default class IntroAnimal extends Component {
    render() {
        return (
            <Row  style={{ display:'flex',flexDirection:'column',justifyContent:'center',marginTop:100 }}>
                <Col style={{ marginBottom:100,width: 800,display:'flex' }} >
                    <div className="introText" style={{ flex:1,marginTop:70,fontFamily:'Schoolbell',borderRadius:10,backgroundColor:'#f2ce63',padding:20,width:330 }}>
                        <h1>Zhuzhu</h1>
                        <h3>one year old American Guinea Pig</h3>
                        <p>Clever and cautious, always keeps his eyes open when fall asleep</p>
                    </div>
                    <div className="introImg" style={{ flex: 1 }}><img style={{ width: '100%', height: '100%', objectFit: 'cover',marginLeft:80 }} alt='' src={piggyImg}/></div>
                </Col>
                <Col style={{ width: 800, display: 'flex' }} >
                    <div className="introImg" style={{ flex: 1 }}><img style={{ width: '80%', height: '100%',marginLeft:-30,marginTop:10 ,objectFit: 'cover' }} alt='' src={bunnyImg}/></div>
                    <div className="introText" style={{ flex:1,marginTop:70,marginLeft:70,fontFamily:'Schoolbell',borderRadius:10,backgroundColor:'#f2ce63',padding:20,marginBottom:30}}>
                        <h1>Tutu</h1>
                        <h3>14 months old grey lop rabbit</h3>
                        <p>Be curious about everything and love to explore the world</p>
                    </div>
                </Col>
            </Row>
        )
    }
}
