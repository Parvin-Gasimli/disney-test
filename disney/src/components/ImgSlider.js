import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider from "react-slick";

const ImgSlider = () => {
  let setting = {
    dots: true,
    infinite: true,
    speed: 500,
    sliderToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carusel {...setting}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="" />
      </Wrap>
    </Carusel>
  );
};

export default ImgSlider;
const Carusel = styled(slider)`
  margin-top: 20px;
  ul li button {
    & ::before {
      font-size: 10px;
      color: white;
    }
  }

  li.slick-active button::before {
    color: white;
  }

  button {
    z-index: 3;
  }
`;
const Wrap = styled.div`
  img {
      transition: .3s linear;
      cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;

      &:hover{
          border: 4px solid rgba(249,249,249,0.8);
      }
  }
`;
