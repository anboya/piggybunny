import React, { Component } from "react";
import { Card } from "antd";
import ReactEcharts from "echarts-for-react";

export default class Feed extends Component {
  getOption = () => {
    let option = {
      title: {
        text: "How do we feed them",
        x: "center",
        show: false,
      },
      tooltip: {
        trigger: "item",
        textStyle: {
          fontSize: 16,
        },
        formatter: "{b} : {d}%",
      },
      color: ["#de6e6a", "#f2ce63", "#9eca7f", "#5a6fc0"],
      legend: {
        orient: "vertical",
        top: 20,
        right: 5,
        data: ["Grass hay", "Fortified food", "Greens", "Treats"],
      },
      series: [
        {
          name: "feed",
          type: "pie",
          radius: ["30%", "80%"],
          data: [
            { value: 70, name: "Grass hay" },
            { value: 20, name: "Fortified food" },
            { value: 8, name: "Greens" },
            { value: 2, name: "Treats" },
          ],
        },
      ],
    };
    return option;
  };
  render() {
    return (
      <Card bordered={false} style={{ width: 800, marginTop: 150 }}>
        <h1 style={{ textAlign: "center", marginBottom: 50 }}>
          How do I feed them
        </h1>
        <ReactEcharts option={this.getOption()} />
      </Card>
    );
  }
}
