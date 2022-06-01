import { projectQuery, projectSlugsQuery } from '@lib/queries/post';
import { sanityClient, getClient, overlayDrafts } from '@lib/sanity.server';
import { Title } from 'components/common/header';

const Project = ({ data = {}, preview = {} }) => {
  console.log(project);

  return (
    <article>
      <Title>{project?.slug?.current}</Title>
    </article>
  );
};

export const getStaticProps = async ({ params, preview = false }) => {
  const { project, moreProjects } = await getClient(preview).fetch(projectQuery, {
    slug: params.slug,
  });
  return {
    props: {
      preview,
      data: {
        project,
        moreProjects: overlayDrafts(moreProjects),
      },
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(projectSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};
export default Project;
