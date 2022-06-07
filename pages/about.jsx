// Next
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

// Sanity
import { indexQuery } from 'lib/queries/about';
import { sanityClient, getClient, overlayDrafts } from 'lib/sanity.server';
import { PortableText, urlForImage, usePreviewSubscription } from 'lib/sanity';

// Styled Comps
import { Heading, Title } from '@/components/common/typography';

// Components
import Layout from '@/components/common/layout';
import Container from '@/components/common/layout/Container';
import PageHeader from '@/components/common/headers/PageHeader';
import ProjectHeader from '@/components/projects/ProjectHeader';
import SectionSeparator from '@/components/common/layout/SectionSeparator';
import PostBody from '@/components/projects/PostBody';
import Header from '@/components/about/Header';

export async function getStaticProps({ params, preview = false }) {
  const aboutPage = await getClient(preview).fetch(indexQuery);

  return {
    props: {
      data: {
        aboutPage,
      },
      preview,
    },
    revalidate: 10,
  };
}

function About({ data = {}, preview = {} }) {
  const router = useRouter();

  const slug = data?.aboutPage?.slug;

  const {
    data: { aboutPage },
  } = usePreviewSubscription(indexQuery, {
    initialData: data,
    enabled: preview,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(aboutPage);

  return (
    <Layout preview={false}>
      <Container>
        {router.isFallback ? (
          <Title>Loading...</Title>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-10 gap-y-20 md:gap-y-10 mb-32 mt-32">
            <Header keywords={aboutPage?.header} />

            <PostBody content={aboutPage.body} />
          </section>
        )}
      </Container>
    </Layout>
  );
}

export default About;
