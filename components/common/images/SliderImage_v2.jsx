import Image from 'next/image';
import PropTypes from 'prop-types';
import { urlForImage } from 'lib/sanity';
import { SliderImageContainer } from '.';

export default function SliderImage({ alt, slug, image: source, styles }) {
  return (
    <SliderImageContainer className="relative image-container">
      <Image
        // width="100%"
        // height="100%"
        src={urlForImage(source).url()}
        // layout="fill"
        alt={alt}
        // loading="lazy"
        // placeholder="blur"
        // blurDataURL="/public/blur.png"
        // src={urlForImage(image).url()}
        layout="responsive"
        height={762}
        width={1920}
        // alt={image?.alt}
        objectFit="contain"
        loading="lazy"
        placeholder="blur"
        blurDataURL="/public/blur.png"
      />
    </SliderImageContainer>
  );
}

SliderImage.propTypes = {
  alt: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  styles: PropTypes.object,
};
