import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows : false
    };

    return (
      <Slider {...settings}>
        <div>
                <img src={require("../img/gallery-1.jpg")} className="img-fluid rounded d-block mx-auto" alt="Gallery 1"/>
        </div>
        <div>
                <img src={require("../img/gallery-2.jpg")} className="img-fluid rounded d-block mx-auto" alt="Gallery 2"/>
        </div>
        <div>
                <img src={require("../img/gallery-3.jpg")} className="img-fluid rounded d-block mx-auto" alt="Gallery 3"/>
        </div>
        <div>

                <img src={require("../img/gallery-4.jpg")} className="img-fluid rounded d-block mx-auto" alt="Gallery 4"/>
        </div>
      </Slider>
    );
  }
}

export default Carousel;
