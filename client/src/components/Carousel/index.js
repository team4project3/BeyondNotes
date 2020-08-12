import React, { Component } from 'react';
import M from "materialize-css";
// import { M } from 'materialize-css/dist/js/materialize.min.js';
import BlueRidge1 from "./blueRidge.jpg";
import BlueRidge2 from "./blueRidge2.jpg";
import DanielsPark from "./danielsPark.jpg";

export default class Slider extends Component {
    componentDidMount() {
        var elem = document.querySelector('.carousel');
        var instance = M.Carousel.init(elem, { duration: 200 });
    }
    render() {
        return (
            <>
                {/* <h3 className="header pink-text">Slider</h1> */}
                <div className="carousel carousel-slider">
                    <a className="carousel-item" href="#one!">
                        <img src={ BlueRidge1 } />
                    </a>
                    <a className="carousel-item" href="#two!">
                        <img src={ BlueRidge2 } />
                    </a>
                    <a className="carousel-item" href="#three!">
                        <img src={ DanielsPark } />
                    </a>
                </div>
                </>
        );
    }
}