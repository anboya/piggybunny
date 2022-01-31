import React, { Component } from "react";
import { Card } from "antd";
import {
  PieChartFilled,
  HeartFilled,
  MedicineBoxFilled,
  DribbbleCircleFilled,
} from "@ant-design/icons";
import "./index.css";
const { Meta } = Card;
export default class Keyfactor extends Component {
  render() {
    return (
      <div style={{ marginTop: 150, marginBottom: 150, textAlign: "center" }}>
        <h1>How do we take care of them</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 60,
          }}
        >
          <Card
            hoverable
            style={{ width: 200, marginRight: 30, paddingTop: 30 }}
            cover={
              <PieChartFilled style={{ fontSize: 50, color: "#459a55" }} />
            }
          >
            <Meta
              title="Nutrition"
              description="Feed them with right food and proportion"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 200, marginRight: 30, paddingTop: 30 }}
            cover={
              <MedicineBoxFilled style={{ fontSize: 50, color: "#459a55" }} />
            }
          >
            <Meta
              title="Health"
              description="Develop healthy habits with preventative care"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 200, marginRight: 30, paddingTop: 30 }}
            cover={<HeartFilled style={{ fontSize: 50, color: "#459a55" }} />}
          >
            <Meta
              title="Comfort"
              description="Provide all the comfort they need"
            />
          </Card>
          <Card
            hoverable
            style={{ width: 200, marginRight: 30, paddingTop: 30 }}
            cover={
              <DribbbleCircleFilled
                style={{ fontSize: 50, color: "#459a55" }}
              />
            }
          >
            <Meta title="Play" description="Keep them occupied and exercised" />
          </Card>
        </div>
      </div>
    );
  }
}
