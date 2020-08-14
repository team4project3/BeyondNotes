import React, { Component } from 'react';
import M from "materialize-css";
// import { M } from 'materialize-css/dist/js/materialize.min.js';
import BlueRidge1 from "./blueRidge.jpg";
import BlueRidge2 from "./blueRidge2.jpg";
import DanielsPark from "./danielsPark.jpg";


export default class Slider extends Component {
    componentDidMount() {
        var elem = document.querySelector('.carousel');
        M.Carousel.init(elem, { duration: 200 });
        // var instance = M.Carousel.init(elem, { duration: 200 });

        // $('.carousel.carousel-slider').carousel({
        //     fullWidth: true,
        //     indicators: false
        // });

        // $('#carousel-next').on('touchstart', function (e) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     $('#carouselFirst').carousel('next');
        // });

        // $('#carousel-prev').on('touchstart', function (e) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     $('#carouselFirst').carousel('prev');
        // });
    }



    render() {
        return (
            <>
                {/* <h3 className="header pink-text">Slider</h1> */}
                <div className="carousel carousel-slider">
                    <div>
                        <a id="carousel-prev" className="movePrevCarousel btn waves-effect left">button</a>
                        <a id="carousel-next" className="moveNextCarousel btn waves-effect right">button</a>
                    </div>
                    <a className="carousel-item" href="#one!">
                        <img src={BlueRidge1} alt="blueRidgeParkway1" />
                    </a>
                    <a className="carousel-item" href="#two!">
                        <img src={BlueRidge2} alt="blueRidgeParkway2" />
                    </a>
                    <a className="carousel-item" href="#three!">
                        <img src={DanielsPark} alt="danielsParkCO" />
                    </a>
                </div>
            </>
        );
    }
}