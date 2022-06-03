import PropTypes from 'prop-types';

import CoverImage from '../common/imeages/CoverImage';
import ProjectTitle from './ProjectTitle';

export default function ProjectHeader({ title, coverImage, date, author }) {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} image={coverImage} />
      </div>
      {/* TODO: Remove? as there is only one author */}
      {/* <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <Date dateString={date} />
        </div>
      </div> */}
    </>
  );
}

ProjectHeader.propTypes = { title: PropTypes.string, coverImage: PropTypes.object, date: PropTypes.string };
