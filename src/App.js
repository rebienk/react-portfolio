import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Services from './Services'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="Rebien Porto" />
        <Header midTitle="Welcome" />
        < Services />
      </div>
    );
  }
}
