import PropTypes from 'prop-types';
import Head from 'next/head';

import { indexQuery as allProjects } from 'lib/queries/project';
import { indexQuery as aboutDoc } from 'lib/queries/about';
import { usePreviewSubscription } from 'lib/sanity';
import { getClient, overlayDrafts } from 'lib/sanity.server';

import Layout from '@/components/common/layout';
import Container from '@/components/common/layout/Container';
import HeroProject from '@/components/projects/HeroProject';
import ProjectList from '@/components/projects/ProjectList';
import AboutHome from '@/components/home/AboutHome';
import SectionSeparator from '@/components/common/layout/SectionSeparator';

export async function getStaticProps({ params, preview = false }) {
  const projects = overlayDrafts(await getClient(preview).fetch(allProjects));
  const about = await getClient(preview).fetch(aboutDoc);

  return {
    props: {
      data: { projects, about },
      preview,
    },
    revalidate: 10,
  };
}

export default function Home({ data = {}, preview }) {
  const {
    data: { projects, about },
  } = usePreviewSubscription([allProjects, aboutDoc], {
    initialData: data,
    enabled: preview,
  });

  const [heroProject, ...moreProjects] = projects;

  return (
    <Layout preview={preview}>
      <Head>
        <title>Solo Interior, European Interior Design</title>
      </Head>
      <Container>
        <HeroProject {...heroProject} />
        <SectionSeparator top={10} bottom={10} />
        <AboutHome aboutDoc={about} />
        <SectionSeparator top={24} bottom={10} />
        <ProjectList projects={moreProjects} />
      </Container>
    </Layout>
  );
}

Home.propTypes = {
  data: PropTypes.object,
  preview: PropTypes.bool,
};
