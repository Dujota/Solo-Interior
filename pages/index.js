import PropTypes from 'prop-types';
import Head from 'next/head';

import { indexQuery as allProjects } from 'lib/queries/project';
import { indexQuery as aboutDoc } from 'lib/queries/about';
import { siteConfigQuery } from 'lib/queries/config';
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
  const config = await getClient(preview).fetch(siteConfigQuery);

  return {
    props: {
      data: { projects, about, config },
      preview,
    },
    revalidate: 10,
  };
}

export default function Home({ data = {}, preview }) {
  const {
    data: { projects, about, config },
  } = usePreviewSubscription([allProjects, aboutDoc, siteConfigQuery], {
    initialData: data,
    enabled: preview,
  });

  const [heroProject, ...moreProjects] = projects;

  return (
    <Layout preview={preview} config={config}>
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
