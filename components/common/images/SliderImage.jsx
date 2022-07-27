import Image from 'next/image';
import PropTypes from 'prop-types';
import { urlForImage } from 'lib/sanity';

export default function SliderImage({ alt, slug, image: source, styles }) {
  return (
    <Image
      src={urlForImage(source).url()}
      layout="responsive"
      height={762}
      width={1920}
      alt={alt}
      objectFit="contain"
      loading="lazy"
      placeholder="blur"
      blurDataURL="/public/blur.png"
    />
  );
}

SliderImage.propTypes = {
  alt: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  styles: PropTypes.object,
};
