import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./index.css";
import { Row, Col } from "antd";
import logo from "../../../src/images/Logo/Logo_transparent.png";

class Header extends Component {
  state = {
    className: "hidden_home",
  };
  componentDidMount() {
    window.addEventListener("scroll", this.bindHandleScroll);
    this.unlisten = this.props.history.listen((location) => {
      if (this.props.location.pathname !== location.pathname) {
        if (this.props.history.location.pathname === "/home") {
          this.setState({ className: "hidden_home" });
          window.scrollTo(0, 0);
        } else {
          this.setState({ className: "hidden" });
          window.scrollTo(0, 0);
        }
      }
    });
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.bindHandleScroll);
    if (this.unlisten) {
      this.unlisten();
    }
  }
  bindHandleScroll = (e) => {
    const scrollTop =
      (e.srcElement ? e.srcElement.documentElement.scrollTop : false) ||
      window.pageYOffset ||
      (e.srcElement ? e.srcElement.body.scrollTop : 0);
    if (scrollTop <= 100 && this.props.history.location.pathname === "/home") {
      this.setState({ className: "hidden_home" });
    } else if (scrollTop <= 100) {
      this.setState({ className: "hidden" });
    } else {
      this.setState({ className: "show" });
    }
  };
  render() {
    return (
      <header
        className={this.state.className}
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <Row>
          <Col style={{ marginTop: 10 }}>
            <NavLink to="/home">
              <img style={{ width: 50 }} src={logo} alt="" /> Piggy & Bunny
            </NavLink>
          </Col>
          <Col flex={1}></Col>
          <Col style={{ marginTop: 25 }}>
            <NavLink to="/comics">Comics</NavLink>
          </Col>
          <Col style={{ marginTop: 25 }}>
            <NavLink to="/shop">Shop</NavLink>
          </Col>
        </Row>
      </header>
    );
  }
}
export default withRouter(Header);
