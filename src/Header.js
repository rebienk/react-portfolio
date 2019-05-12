import React, { Component } from "react";
import './header.css'

export default class Header extends Component {
  render() {

    return (
      <header>
        <h1>{this.props.midTitle}</h1>
        <p>To my portfolio built with React</p>
        <button href="#button">Want to see more?</button>
      </header>
    );
  }
}
