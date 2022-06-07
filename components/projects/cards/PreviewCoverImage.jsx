import PropTypes from 'prop-types';

import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/lib/sanity';

export default function PreviewCoverImage({ title, slug, image: source }) {
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
        quality={100}
        // placeholder="blur"
        src={urlForImage(source).height(1000).width(2000).url()}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '50%', backgroundColor: '#ddd' }} />
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

PreviewCoverImage.propTypes = { title: PropTypes.string, slug: PropTypes.string, image: PropTypes.string };
