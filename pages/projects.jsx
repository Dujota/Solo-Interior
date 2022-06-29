import PropTypes from 'prop-types';

// Next
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

// Sanity
import { indexQuery } from 'lib/queries/project';

import { sanityClient, getClient, overlayDrafts } from 'lib/sanity.server';
import { urlForImage, usePreviewSubscription } from 'lib/sanity';

// Styled Comps
import { Title } from '@/components/common/typography';

// Components
import Layout from '@/components/common/layout';
import Container from '@/components/common/layout/Container';
import ProjectList from '@/components/projects/ProjectList';
import { siteConfigQuery } from 'lib/queries/config';

export async function getStaticProps({ params, preview = false }) {
  const allProjects = overlayDrafts(await getClient(preview).fetch(indexQuery));
  const config = await getClient(preview).fetch(siteConfigQuery);

  return {
    props: {
      data: {
        projects: allProjects,
        config,
      },
      preview,
    },
    revalidate: 10,
  };
}

function Projects({ data = {}, preview }) {
  const router = useRouter();

  const {
    data: { projects, config },
  } = usePreviewSubscription([indexQuery, siteConfigQuery], {
    initialData: data,
    enabled: preview,
  });

  return (
    <Layout preview={false} config={config}>
      <Container>{router.isFallback ? <Title>Loading...</Title> : <ProjectList projects={projects} />}</Container>
    </Layout>
  );
}

export default Projects;

Projects.propTypes = {
  data: PropTypes.object,
  preview: PropTypes.bool,
};
