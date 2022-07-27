import PrevArrow from './PrevArrow';
import NextArrow from './NextArrow';

export const projectPageSlider = {
  settings: {
    oneSlide: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      className: 'slider variable-width center',
      adaptiveHeight: true,
      cssEase: 'linear',
      pauseOnHover: true,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      swipeToSlide: true,
      swipe: true,
      focusOnSelect: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
          },
        },
      ],
    },
    twoSlides: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      initialSlide: 0,
      className: 'slider variable-width center',
      slidesToScroll: 2,
      adaptiveHeight: true,
      cssEase: 'linear',
      pauseOnHover: true,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      swipeToSlide: true,
      swipe: true,
      focusOnSelect: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
    default: {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    },
  },
  imageStyle: { height: 600, margin: '10px' },
};
