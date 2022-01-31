import React, { Component } from "react";
import { Row, Col, Checkbox, List, Card, Image, Radio, Space } from "antd";
import "./index.css";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Mug", "T-shirt", "Bag", "Photo Frame"];
const defaultCheckedList = ["Mug", "Bag", "Photo Frame"];
const requireContext = require.context(
  "../../uploads/Products",
  true,
  /^\.\/.*\.jpg$/
);
const images = requireContext.keys().map(requireContext);
const data = [
  {
    title: "Mug White one",
    img: images[0].default,
    price: 20,
    kind: "Mug",
    id: 1,
  },
  {
    title: "Mug White two",
    img: images[1].default,
    price: 20,
    kind: "Mug",
    id: 2,
  },
  {
    title: "Mug Black one",
    img: images[2].default,
    price: 20,
    kind: "Mug",
    id: 3,
  },
  {
    title: "Mug Black two",
    img: images[3].default,
    price: 20,
    kind: "Mug",
    id: 4,
  },
  {
    title: "T-shirt Green one",
    img: images[4].default,
    price: 29,
    kind: "T-shirt",
    id: 5,
  },
  {
    title: "T-shirt Green two",
    img: images[5].default,
    price: 29,
    kind: "T-shirt",
    id: 6,
  },
  {
    title: "T-shirt Pink one",
    img: images[6].default,
    price: 29,
    kind: "T-shirt",
    id: 7,
  },
  {
    title: "T-shirt Pink two",
    img: images[7].default,
    price: 29,
    kind: "T-shirt",
    id: 8,
  },
  {
    title: "Bag one",
    img: images[8].default,
    price: 22,
    kind: "Bag",
    id: 9,
  },
  {
    title: "Bag two",
    img: images[9].default,
    price: 22,
    kind: "Bag",
    id: 10,
  },
  {
    title: "Photo Frame one",
    img: images[10].default,
    price: 15,
    kind: "Photo Frame",
    id: 11,
  },
  {
    title: "Photo Frame two",
    img: images[11].default,
    price: 15,
    kind: "Photo Frame",
    id: 12,
  },
];
function compareLow(p) {
  return function (m, n) {
    let a = m[p];
    let b = n[p];
    return a - b;
  };
}
function compareHigh(p) {
  return function (m, n) {
    let a = m[p];
    let b = n[p];
    return b - a;
  };
}

export default class Gallery extends Component {
  state = {
    checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    value: 1,
  };
  onChangeRadio = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  onChangeCheck = (list) => {
    this.setState({
      checkedList: list,
      indeterminate: !!list.length && list.length < plainOptions.length,
      checkAll: list.length === plainOptions.length,
    });
  };
  onCheckAllChange = (e) => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };
  render() {
    const { value } = this.state;
    let sortedData;
    if (value === 2) {
      sortedData = data.sort(compareLow("price"));
    } else if (value === 3) {
      sortedData = data.sort(compareHigh("price"));
    } else sortedData = data.sort(compareHigh("id"));
    const newdata = sortedData.filter((item) =>
      this.state.checkedList.includes(item.kind)
    );
    return (
      <div className="shop" style={{ marginBottom: 100 }}>
        <Row>
          <Col className="checkbox">
            <h2 style={{ fontSize: 22 }}>Fliter</h2>
            <Checkbox
              indeterminate={this.state.indeterminate}
              onChange={this.onCheckAllChange}
              checked={this.state.checkAll}
            >
              See all
            </Checkbox>
            <CheckboxGroup
              options={plainOptions}
              value={this.state.checkedList}
              onChange={this.onChangeCheck}
            />
            <h2 style={{ marginTop: 20, fontSize: 22 }}>Sort</h2>
            <Radio.Group onChange={this.onChangeRadio} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Default</Radio>
                <Radio value={2}>Price: Low to High</Radio>
                <Radio value={3}>Price: High to Low</Radio>
              </Space>
            </Radio.Group>
          </Col>
          <Col flex={1} className="shopList">
            <div
              style={{
                height: 30,
                backgroundColor: "#f2ce63",
                color: "#fff",
                marginBottom: 50,
                textAlign: "center",
                borderRadius: 10,
              }}
            >
              The below products are just for display
            </div>
            <List
              grid={{ gutter: 32, column: 4 }}
              dataSource={newdata}
              renderItem={(item) => (
                <List.Item>
                  <Card hoverable bordered={false} style={{ padding: 0 }}>
                    <Image
                      style={{
                        objectFit: "fill",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                      src={item.img}
                    />
                    <div style={{ textAlign: "center" }}>{item.title}</div>
                    <div style={{ textAlign: "center" }}>${item.price}</div>
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
