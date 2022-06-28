import React from 'react';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { projectPageSlider } from './settings';
import SliderImage from '../images/SliderImage';

function ImageSlider({ images }) {
  return (
    <div className="image-slider slider mb-12">
      <Slider {...projectPageSlider.settings}>
        {images?.map((image, idx) => (
          <SliderImage key={idx} image={image} styles={projectPageSlider.imageStyle} />
        ))}
      </Slider>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array,
};

export default ImageSlider;
