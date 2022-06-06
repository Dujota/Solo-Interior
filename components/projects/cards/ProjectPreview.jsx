import Link from 'next/link';
import PropTypes from 'prop-types';

import { CardHeading, DateText, OtherText } from '@/components/common/typography';
import Date from '@/components/common/Date';
import CoverImage from './CoverImage';
import { FullCardContentWrapper, FullCardHeaderWrapper, FullCardImageWrapper } from './projectCardStyles';

export default function ProjectPreview({ title, coverImage, publishedAt, excerpt, slug, full }) {
  if (full) {
    return (
      <>
        <FullCardImageWrapper className="mb-5">
          <CoverImage slug={slug} title={title} image={coverImage} />
        </FullCardImageWrapper>

        <FullCardContentWrapper className="mb-5">
          <FullCardHeaderWrapper>
            <CardHeading className="mb-3 leading-snug">
              <Link href={`/projects/${slug}`}>
                <a className="hover:underline">{title}</a>
              </Link>
            </CardHeading>

            <DateText className="mb-4">
              <Date dateString={publishedAt} />
            </DateText>
          </FullCardHeaderWrapper>

          <p className="leading-relaxed mb-4">
            <OtherText>{excerpt}</OtherText>
          </p>
        </FullCardContentWrapper>
      </>
    );
  }

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/projects/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <Date dateString={publishedAt} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}

ProjectPreview.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.object,
  publishedAt: PropTypes.string,
  excerpt: PropTypes.string,
  slug: PropTypes.string,
  full: PropTypes.bool,
};
