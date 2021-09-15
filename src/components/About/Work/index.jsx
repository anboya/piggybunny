import React, { Component } from 'react'
import suitcase from '../../../images/suitcase.png'
import {Timeline} from 'antd';
import {
    CalendarFilled,
} from '@ant-design/icons'
export default class Work extends Component {
    render() {
        return (
            <div style={{marginTop:100,marginBottom:200}}>
                <h1 style={{textAlign:'center'}}>
                    <img style={{width:20,verticalAlign:'baseline'}} src={suitcase} alt="" />  Work experience
                </h1>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <Timeline mode="alternate" style={{width:800,marginTop:50}}>
                    <Timeline.Item><div><h2>Field Service Engineer</h2> <h3>Grand View Technology</h3><div><CalendarFilled /> 2018.6-2019.5</div></div></Timeline.Item>
                    <Timeline.Item><div><h2>Electrical Engineer Intern</h2> <h3>Dara Switchboard</h3><div><CalendarFilled /> 2019.5-2019.8</div></div></Timeline.Item>
                    <Timeline.Item><div><h2>Test Engineer</h2> <h3>SAL National</h3><div><CalendarFilled /> 2020.10-Current</div></div></Timeline.Item>             
                    <Timeline.Item><div><h2>Web Frontend Programming</h2> <h3>Self study</h3><div><CalendarFilled /> 2021.4-Current</div></div></Timeline.Item>             
                    </Timeline>
                </div>
            </div>
        )
    }
}
