// Next
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

// Sanity
import { indexQuery } from '@lib/queries/project';
import { sanityClient, getClient, overlayDrafts } from '@lib/sanity.server';
import { urlForImage, usePreviewSubscription } from '@lib/sanity';

// Styled Comps
import { Title } from 'components/common/titles';

// Components
import Layout from 'components/common/layout';
import Container from 'components/common/layout/Container';
import PageHeader from 'components/common/headers/PageHeader';
import ProjectHeader from 'components/projects/ProjectHeader';
import SectionSeparator from 'components/common/layout/SectionSeparator';
import PostBody from 'components/projects/PostBody';

function Projects({ data = {}, preview = {} }) {
  const router = useRouter();

  const slug = data?.projects?.slug;

  const {
    data: { projects },
  } = usePreviewSubscription(indexQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  return <div>Projects Index</div>;
}

export default Projects;
