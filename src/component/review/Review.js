import React from 'react'
import "./review.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {TestimonialData} from "../../constant/review-data";
import {Heading} from ".."
function Review() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return (
        <div className="testimonial">
        <Heading title="Testimonials" />
        <div className="testimonial__slider">
          <Slider {...settings}>
            {TestimonialData.map(
              ({ url, company, post, review, name }, index) => (
                <div key={index} className="testimonial__holder">
                  <img src={url} alt="" />
                  <h4>{name}</h4>
                  <div className="testimonial__holderDes">
                    <div>{post}</div>
                    <div className="testimonial__holderDesImage">
                      <img src={company} />
                    </div>
                  </div>
                  <p>{review}</p>
                </div>
              )
            )}
          </Slider>
        </div>
      </div>
    )
}

export default Review
