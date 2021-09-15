import React, { Component } from 'react'
import './index.css'
import { BackTop } from 'antd'
import { PhoneFilled, MailFilled, EnvironmentFilled,VerticalAlignTopOutlined } from '@ant-design/icons';


const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    // backgroundColor: '#459a55',
    backgroundColor: '#5c985c',
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
  };
export default class Footer extends Component {
    render() {
        return (
            <footer style={{backgroundColor:'#5f3734', marginTop:'auto',height:200,paddingTop:20,paddingBottom:20}}>
                <div className='contact' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <BackTop>
                <div style={style}><VerticalAlignTopOutlined /></div>
                    </BackTop>
                    <h1>Contact Me</h1>
                    <div style={{ display: 'flex',justifyContent:'space-around',marginTop:20 }}>
                        <div style={{width:250}}>
                        <div style={{fontSize:35, float:'left',marginRight:20,marginLeft:40}}><PhoneFilled /></div>
                        <div>Phone <br />04-1057-3218 </div>
                        </div>
                        <div style={{width:400}}>
                        <div style={{fontSize:35, float:'left',marginRight:20,marginLeft:60}}><MailFilled /></div>
                        <div>Email <br />fadengchen1@gmail.com </div>
                        </div>
                        <div style={{width:250}}>
                        <div style={{fontSize:35, float:'left',marginRight:20,marginLeft:40}}><EnvironmentFilled /></div>
                        <div>Location <br />Sydney, Australia </div>
                        </div>      
                    </div>
               </div>
            </footer>
        )
    }
}
