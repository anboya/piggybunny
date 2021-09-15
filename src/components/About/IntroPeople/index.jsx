import React, { Component } from 'react'
import daniel from '../../../uploads/daniel.png'
import { Row, Col, Button } from 'antd'
import resume from '../../../uploads/Daniel Chen-resume.pdf'
import {
    ContactsFilled,
    LinkedinFilled,
    GithubFilled,
    DownloadOutlined,
} from '@ant-design/icons'
export default class IntroPeople extends Component {
    render() {
        return (
                <Row  style={{ marginTop:200,marginBottom:200,display:'flex',justifyContent:'center' }}>
                    <Col style={{ width: 200, marginTop:50,fontSize:30}} className='introSocial'>
                        <a style={{color:'#593935'}} href="https://www.linkedin.com/in/fadengchen/" target='_blank' rel="noreferrer"><LinkedinFilled /></a><br />
                        <a style={{color:'#593935'}} href="https://github.com/DanielChen93" target='_blank' rel="noreferrer"><GithubFilled /></a><br />
                        <a style={{color:'#593935'}} href="#bottom"><ContactsFilled /></a><br />
                    </Col>
                    <Col style={{ width: 800,display:'flex' }} className='introPeople'>
                        <div className="introText" style={{ flex:1 }}>
                            <h1 style={{fontSize:36,fontWeight:700}}>Hi, I'm Daniel</h1>
                            <h3 style={{fontSize:24}}>Frontend developer</h3>
                            <p style={{fontSize:18}}>Highly motivated, self-starting developer seeking to launch a career building web application and service.</p>
                           <a href={resume} download="Daniel Chen_resume.pdf" alt=''><Button style={{marginTop:30,backgroundColor:'#593935',borderColor:'#593935'}} type="primary" shape="round" icon={<DownloadOutlined />} size='large'>
                            Download Resume
                            </Button></a>
                        </div>
                        <div className="introImg" style={{ flex: 1,justifyContent:'right'}}><img style={{ width: 300 }} alt='' src={daniel}/></div>
                    </Col>
                </Row>
          
        )
    }
}
