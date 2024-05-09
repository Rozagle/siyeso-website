// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Team1 from '../assets/team1.jpg';
// import Team2 from '../assets/team2.jpg';
import Team3 from '../assets/team3.jpg';
// import Team4 from '../assets/team4.jpg';
// import Team5 from '../assets/team5.jpg';
import Team6 from '../assets/team6.jpg';
// import Team7 from '../assets/team7.jpg';

function Team() {
  const teamImages = [ Team3, Team6];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };


  return (
    <div id='team' className="slider-container min-h-[500px] justify-center items-center text-neutral-700">

      <div className='flex space-y-2 flex-col text-center mb-14'>
        <h1 className="md:text-4xl sm:text-3xl xxs:text-3xl text-2xl font-bold text-center mt-8 mb-4 capitalize">
          Our Teams
        </h1>
      </div>

      <Slider {...settings} className="pb-4">
        {teamImages.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt="" className="w-140 h-140 object-cover" />
            <div className="text-container">
              <span className="category">proje yonetimi</span>
              <span className="title">Cheat Sheet</span>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Team;
