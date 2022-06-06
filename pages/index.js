import Head from 'next/head';
import Image from 'next/image';

import { indexQuery } from '@lib/queries/project';
import { usePreviewSubscription, PortableText } from '@lib/sanity';
import sanityClient, { getClient, overlayDrafts } from '@lib/sanity.server';

import Layout from '@/components/common/layout';
import Container from '@/components/common/layout/Container';
import HeroProject from '@/components/projects/HeroProject';
import ProjectList from '@/components/projects/ProjectList';
import AboutHome from '@/components/home/AboutHome';
import SectionSeparator from '@/components/common/layout/SectionSeparator';

export async function getStaticProps({ params, preview = false }) {
  const allProjects = overlayDrafts(await getClient(preview).fetch(indexQuery));

  return {
    props: {
      data: { projects: allProjects },
      preview,
    },
    revalidate: 10,
  };
}

export default function Home({ data = {}, preview }) {
  const {
    data: { projects },
  } = usePreviewSubscription(indexQuery, {
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
        <AboutHome />
        <SectionSeparator top={24} bottom={10} />
        <ProjectList projects={moreProjects} />
      </Container>
    </Layout>
  );
}
