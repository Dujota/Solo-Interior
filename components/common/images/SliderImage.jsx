import Image from 'next/image';
import PropTypes from 'prop-types';
import { urlForImage } from 'lib/sanity';
import { SliderImageContainer } from '.';

export default function SliderImage({ alt, slug, image: source, styles }) {
  return (
    <SliderImageContainer className="relative image-container">
      <Image
        width="100%"
        height="100%"
        src={urlForImage(source).url()}
        layout="fill"
        alt={alt}
        // objectFit="contain"
      />
    </SliderImageContainer>
  );
}

SliderImage.propTypes = {
  alt: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
  styles: PropTypes.object,
};
