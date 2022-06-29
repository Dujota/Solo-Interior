export const projectPageSlider = {
  settings: {
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
  imageStyle: { height: 600, margin: '10px' },
};
