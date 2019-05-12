import React, { Component } from 'react';
import './services.css'

export default class Services extends Component {

    render() {

        return (
            <div className="container">
                <h3>Progress</h3>
                <h2>My Focus points</h2>
                <div className="row">
                    <div className="col-md-2 text-center">
                        <ion-icon name="outlet"></ion-icon>
                        <h3>Components</h3>
                    </div>
                    <div className="col-md-2 text-center">
                        <ion-icon name="construct"></ion-icon>
                        <h3>Backend</h3>
                    </div>
                    <div className="col-md-2 text-center">
                        <ion-icon name="contract"></ion-icon>
                        <h3>Responsive</h3>
                    </div>
                    <div className="col-md-2 text-center">
                        <ion-icon name="wifi"></ion-icon>
                        <h3>Mobility</h3>
                    </div>
                </div>
            </div>
        )
    }
}