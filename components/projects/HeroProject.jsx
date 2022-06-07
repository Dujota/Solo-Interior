import PropTypes from 'prop-types';

// Next
import Link from 'next/link';

// Components
import { DEFAULT_HERO_PROJECT_IMAGE_SIZE } from 'lib/constants';
import Date from '../common/Date';
import CoverImage from '../common/imeages/CoverImage';

// Hooks
import useImageSize from '../hooks/utils/useImageSize';

export default function HeroProject({ title, heroImage, publishedAt, excerpt, slug }) {
  const size = useImageSize({ defaultValue: DEFAULT_HERO_PROJECT_IMAGE_SIZE });

  return (
    <section className="hover:drop-shadow-md">
      <div className="mb-4 md:mb-8">
        <CoverImage slug={slug} title={title} image={heroImage} size={size} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-4 lg:gap-x-2 mb-4 md:mb-5">
        <div className="mb-4 md:mb-0 text-lg font-bold">
          <Date dateString={publishedAt} />
        </div>

        <h3 className="mb-4 text-4xl font-bold lg:text-4xl leading-tight flex flex-col">
          <Link href={`/projects/${slug}`}>
            <a className="hover:underline">{title}</a>
          </Link>

          <p className="text-lg leading-relaxed mt-2 mb-4 font-semibold">{excerpt}</p>
        </h3>
      </div>
    </section>
  );
}

HeroProject.propTypes = {
  title: PropTypes.string,
  heroImage: PropTypes.object,
  publishedAt: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
};
