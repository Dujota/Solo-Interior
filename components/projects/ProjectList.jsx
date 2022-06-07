import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import ProjectPreview from './cards/ProjectPreview';

function ProjectList({ projects = [] }) {
  const router = useRouter();
  const isIndex = router.asPath === '/projects';

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-10 gap-y-20 md:gap-y-10 mb-32 mt-32">
      {projects.map(({ slug, title, heroImage, publishedAt, excerpt }) => (
        <ProjectPreview
          key={slug}
          title={title}
          coverImage={heroImage}
          publishedAt={publishedAt}
          slug={slug}
          excerpt={excerpt}
          full={isIndex}
        />
      ))}
    </section>
  );
}

ProjectList.propTypes = { projects: PropTypes.array };

export default ProjectList;
