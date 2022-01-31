import React, { Component } from "react";
import { Image, Row, Col } from "antd";
import { nanoid } from "nanoid";
import "./index.css";
import author from "../../uploads/Author.png";
import signature from "../../uploads/signature.png";

const requireContext = require.context(
  "../../uploads/comics",
  true,
  /^\.\/.*\.jpg$/
);
const images = requireContext.keys().map(requireContext);
const data = [
  {
    author: "Arren",
    title: "Brother",
    image: [
      images[0].default,
      images[1].default,
      images[2].default,
      images[3].default,
      images[4].default,
    ],
  },
  {
    author: "Boya",
    title: "Conditioned reflex",
    image: [
      images[5].default,
      images[6].default,
      images[7].default,
      images[8].default,
      images[9].default,
      images[10].default,
      images[11].default,
    ],
  },
  {
    author: "Arren",
    title: "Distinctive Appearance",
    image: [
      images[12].default,
      images[13].default,
      images[14].default,
      images[15].default,
      images[16].default,
    ],
  },
];
export default class Comics extends Component {
  state = {
    visible: false,
  };
  render() {
    return (
      <div style={{ marginTop: -50 }}>
        <div
          style={{
            position: "fixed",
            zIndex: 1,
            marginLeft: 20,
            width: 300,
            height: 420,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 10,
            backgroundColor: "#f2ce63",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: 130, marginTop: 14, marginBottom: 12 }}
            src={author}
            alt=""
          />
          <div style={{ fontSize: 18, fontWeight: 700 }}>AUTHOR</div>
          <p style={{ fontSize: 14, marginTop: 8, fontStyle: "italic" }}>
            Hi, I’m Arren. I’m an animal lover who enjoys drawing comics. Zhuzhu
            (guinea pig) and Tutu (rabbit) are my pets, they are also the main
            characters of my comics. I always find creative inspiration from
            them and I love to use my drawings to record their everyday life.
            Hope you enjoy my comics!{" "}
          </p>
          <div style={{ position: "relative" }}>
            <img
              style={{ width: 60, position: "absolute", top: -20, right: -116 }}
              src={signature}
              alt=""
            />
          </div>
        </div>
        <div
          className="comics"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 100,
            marginBottom: 100,
            paddingLeft: 350,
          }}
        >
          {data.map((comics) => (
            <div key={nanoid()}>
              <div
                style={{
                  height: 36,
                  backgroundColor: "#593935",
                  marginBottom: 20,
                  paddingLeft: 20,
                  fontSize: 20,
                  lineHeight: 2,
                  color: "#fff",
                  borderRadius: 10,
                  fontFamily: "schoolbell",
                }}
              >
                {comics.title}
              </div>
              <Row>
                <Image.PreviewGroup>
                  {comics.image.map((img, index) => (
                    <Col
                      key={nanoid()}
                      style={{ marginRight: 20, marginLeft: 20 }}
                    >
                      <div
                        style={{
                          width: 25,
                          height: 25,
                          backgroundColor: "#f2ce63",
                          color: "#fff",
                          marginBottom: 10,
                          textAlign: "center",
                        }}
                      >
                        {index + 1}
                      </div>
                      <Image width={300} src={img} />
                    </Col>
                  ))}
                </Image.PreviewGroup>
              </Row>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
