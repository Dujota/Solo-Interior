import Image from 'next/image';
import PropTypes from 'prop-types';
import { urlForImage } from 'lib/sanity';
import useImageSize from 'components/hooks/utils/useImageSize';
import { DEFAULT_SLIDER_IMAGE_SIZE } from 'lib/constants';

export default function SliderImage({ alt, slug, image: source, styles }) {
  const size = useImageSize(DEFAULT_SLIDER_IMAGE_SIZE, { width: 1, height: 1 });

  return (
    <Image
      src={urlForImage(source).url()}
      layout="responsive"
      alt={alt}
      objectFit="contain"
      loading="lazy"
      placeholder="blur"
      blurDataURL="/public/blur.png"
      {...size}
    />
  );
}

SliderImage.propTypes = {
  alt: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  styles: PropTypes.object,
};
