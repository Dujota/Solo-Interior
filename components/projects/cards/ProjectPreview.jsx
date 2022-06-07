import Link from 'next/link';
import PropTypes from 'prop-types';

import { CardHeading, DateText, OtherText } from '@/components/common/typography';
import Date from '@/components/common/Date';
import PreviewCoverImage from './PreviewCoverImage';
import {
  FullCardContentWrapper,
  FullCardHeaderWrapper,
  FullCardImageWrapper,
  PreviewCardWrapper,
  PreviewCardContentWrapper,
} from './projectCardStyles';

export default function ProjectPreview({ title, coverImage, publishedAt, excerpt, slug, full }) {
  if (full) {
    return (
      <>
        <FullCardImageWrapper className="mb-5">
          <PreviewCoverImage slug={slug} title={title} image={coverImage} />
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
    <PreviewCardWrapper className="hover:drop-shadow-lg">
      <div className="mb-5">
        <PreviewCoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <PreviewCardContentWrapper className="flex justify-between">
        <div className="text-lg mb-4 font-bold">
          <Date dateString={publishedAt} />
        </div>
        <h3 className="text-2xl mb-3 leading-snug font-bold lg:max-w-[70%] sm:max-w-[75%]">
          <Link href={`/projects/${slug}`}>
            <a className="hover:underline">{title}</a>
          </Link>

          <p className="text-base leading-relaxed mb-4 font-semibold">{excerpt}</p>
        </h3>
      </PreviewCardContentWrapper>
    </PreviewCardWrapper>
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
