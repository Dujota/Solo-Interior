import { indexQuery } from '@lib/queries/project';
import { usePreviewSubscription, PortableText } from '@lib/sanity';
import sanityClient, { getClient, overlayDrafts } from '@lib/sanity.server';

import Head from 'next/head';
import Image from 'next/image';

import Layout from 'components/common/layout';
import Container from 'components/common/layout/Container';

import styles from '../styles/Home.module.css';

export async function getStaticProps({ params, preview = false }) {
  const allProjects = overlayDrafts(await getClient(preview).fetch(indexQuery));

  return {
    props: {
      projects: allProjects,
      preview,
    },
    revalidate: 10,
  };
}

export default function Home({ projects, preview }) {
  const [heroProject, moreProjects] = projects;

  // console.log(projects);
  console.log('heroProject', heroProject);
  console.log('moreProjects', moreProjects);
  return (
    <Layout preview={preview}>
      <Head>
        <title>Solo Interior, European Interior Design</title>
      </Head>
      <Container>Hello World</Container>
    </Layout>
  );
}
