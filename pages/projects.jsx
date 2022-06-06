// Next
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

// Sanity
import { indexQuery } from '@lib/queries/project';
import { sanityClient, getClient, overlayDrafts } from '@lib/sanity.server';
import { urlForImage, usePreviewSubscription } from '@lib/sanity';

// Styled Comps
import { Title, Heading } from 'components/common/typography';

// Components
import Layout from 'components/common/layout';
import Container from 'components/common/layout/Container';
import PageHeader from 'components/common/headers/PageHeader';
import ProjectHeader from 'components/projects/ProjectHeader';
import SectionSeparator from 'components/common/layout/SectionSeparator';
import PostBody from 'components/projects/PostBody';
import ProjectList from '@/components/projects/ProjectList';

export async function getStaticProps({ params, preview = false }) {
  const allProjects = overlayDrafts(await getClient(preview).fetch(indexQuery));

  return {
    props: {
      data: {
        projects: allProjects,
      },
      preview,
    },
    revalidate: 10,
  };
}

function Projects({ data = {}, preview = {} }) {
  const router = useRouter();

  const {
    data: { projects },
  } = usePreviewSubscription(indexQuery, {
    initialData: data,
    enabled: preview,
  });
  console.log(projects);
  return (
    <Layout preview={false}>
      <Container>{router.isFallback ? <Title>Loading...</Title> : <ProjectList projects={projects} />}</Container>
    </Layout>
  );
}

export default Projects;