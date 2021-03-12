import React from "react";
import { Heading } from "..";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./blog.css";
function Blog() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
autoplay:true,
autoplaySpeed:2000,
    slidesToScroll: 1,
  };
  return (
    <div className="blog">
      <Heading title="Feature Blogs" />
      <div className="blog__slider">
        <Slider {...settings}>
        <div className="blog__sliderCard">
            <img src="/images/gst.png"  alt="" />
            <h4>Calculation of Interest on Net Liability of GST</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..... READ MORE</p>
        </div>
        <div className="blog__sliderCard">
            <img src="/images/gst.png"  alt="" />
            <h4>Calculation of Interest on Net Liability of GST</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..... READ MORE</p>
        </div>
        <div className="blog__sliderCard">
            <img src="/images/gst.png"  alt="" />
            <h4>Calculation of Interest on Net Liability of GST</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..... READ MORE</p>
        </div>
        <div className="blog__sliderCard">
            <img src="/images/gst.png"  alt="" />
            <h4>Calculation of Interest on Net Liability of GST</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..... READ MORE</p>
        </div>
        <div className="blog__sliderCard">
            <img src="/images/gst.png"  alt="" />
            <h4>Calculation of Interest on Net Liability of GST</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..... READ MORE</p>
        </div>
        <div className="blog__sliderCard">
            <img src="/images/gst.png"  alt="" />
            <h4>Calculation of Interest on Net Liability of GST</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..... READ MORE</p>
        </div>
        </Slider>
      </div>
    </div>
  );
}

export default Blog;
