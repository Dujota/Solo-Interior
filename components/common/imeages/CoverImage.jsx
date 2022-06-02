import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import { urlForImage } from '@lib/sanity';

import { EmptyCoverImage } from '.';

export default function CoverImage({ title, slug, image: source }) {
  const image = source ? (
    <div
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    >
      <Image
        layout="responsive"
        width={2000}
        height={1000}
        alt={`Cover Image for ${title}`}
        src={urlForImage(source).height(1000).width(2000).url()}
      />
    </div>
  ) : (
    <EmptyCoverImage />
  );

  // TODO: href should come from the project schema
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

CoverImage.propTypes = { title: PropTypes.string, slug: PropTypes.string, image: PropTypes.string };
