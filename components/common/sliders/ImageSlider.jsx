import React from 'react';
import PropTypes from 'prop-types';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { ImageSliderWrapper } from './sliderStyles';
import { projectPageSlider } from './settings';

import SliderImage from '../images/SliderImage';

function ImageSlider({ images }) {
  return (
    <ImageSliderWrapper className="image-slider slider mb-12">
      <Slider {...projectPageSlider.settings.oneSlide}>
        {images?.map((image, idx) => (
          <SliderImage key={idx} image={image} />
        ))}
      </Slider>
    </ImageSliderWrapper>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.array,
};

export default ImageSlider;
