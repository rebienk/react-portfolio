import React, { Component } from "react";

import "./navigation.css";

export default class Navigation extends Component {
  render() {
    const navSections = ["Home", "About", "Porfolio", "Contact"];
    const navLinks = navSections.map(section => {
      return (
        <li>
          <a href={"#" + section}>{section}</a>
        </li>
      );
    });
    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>
        <ul>{navLinks}</ul>
      </nav>
    );
  }
}
