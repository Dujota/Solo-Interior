import { usePreviewSubscription, PortableText } from '@lib/sanity';
import sanityClient, { getClient } from '@lib/sanity.server';

import { groq } from 'next-sanity';

import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

const query = groq`
*[_type == "project"] | order(_createdAt desc)
`;

export async function getStaticProps({ params, preview = false }) {
  const projects = await getClient(preview).fetch(query);

  return {
    props: {
      projects,
      preview,
    },
    revalidate: 10,
  };
}

export default function Home({ projects }) {
  console.log(projects);
  return <>Hello</>;
}
