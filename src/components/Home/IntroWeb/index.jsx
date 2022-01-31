import React, { Component } from "react";
import { Divider } from "antd";
export default class IntroWeb extends Component {
  render() {
    return (
      <div style={{ width: 1000, marginTop: 50 }}>
        <p style={{ fontSize: 18, marginTop: 50 }}>
          <b>
            <i>Piggy & Bunny </i>
          </b>
          is a website designed to introduce my two pets, Zhuzhu (a guinea pig)
          and Tutu (a lop rabbit) and share my comics about them. They first
          came home in November 2020. Since then, they have become my important
          family members and have brought me countless joys.
        </p>
        <Divider
          style={{
            marginTop: 80,
            borderWidth: 1,
            borderColor: "rgba(0,0,0,.3)",
          }}
        ></Divider>
      </div>
    );
  }
}
