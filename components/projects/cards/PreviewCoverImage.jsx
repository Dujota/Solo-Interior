import PropTypes from 'prop-types';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from 'lib/sanity';
import { EmptyCoverImage } from 'components/common/images';

export default function PreviewCoverImage({ title, slug, image: source, size }) {
  const image = source ? (
    <div
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    >
      <Image
        layout="responsive"
        alt={`Cover Image for ${title}`}
        quality={100}
        placeholder="blur"
        blurDataURL="/public/blur.png"
        {...size}
        src={urlForImage(source).height(size?.height).width(size?.width).url()}
      />
    </div>
  ) : (
    <EmptyCoverImage />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/projects/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

PreviewCoverImage.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.object,
  size: PropTypes.object,
};
