import React, { Component } from 'react'
import {Progress} from 'antd';
import {
    CodeFilled,
} from '@ant-design/icons'
export default class Skills extends Component {
    render() {
        return (
            <div style={{marginTop:300,marginBottom:200,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <h1 style={{textAlign:'center'}}>
                    <CodeFilled /> Frontend skill set
                </h1>
                <div className='skill' style={{width:600}}>
                    <div><span>HTML</span><span style={{float:'right'}}>80%</span></div>
                    <Progress showInfo={false} strokeColor={{from: '#108ee9',to: '#87d068',}}percent={80}status="active"/>
                    <div><span>CSS</span><span style={{float:'right'}}>70%</span></div>
                    <Progress showInfo={false} strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={70} status="active" />
                    <div><span>JavaScript</span><span style={{float:'right'}}>80%</span></div>
                    <Progress showInfo={false} strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={80} status="active" />
                    <div><span>React</span><span style={{float:'right'}}>75%</span></div>
                    <Progress showInfo={false} strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={75} status="active" />
                    <div><span>Ant Design</span><span style={{float:'right'}}>80%</span></div>
                    <Progress showInfo={false} strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={80} status="active" />
                    <div><span>ES6</span><span style={{float:'right'}}>70%</span></div>
                    <Progress showInfo={false} strokeColor={{ from: '#108ee9', to: '#87d068', }} percent={70} status="active" />
                    <div><span>Ajax</span><span style={{float:'right'}}>60%</span></div>
                    <Progress showInfo={false} strokeColor={{from: '#108ee9',to: '#87d068',}}percent={60}status="active"/>
                </div>
            </div>
        )
    }
}
