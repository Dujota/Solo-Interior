import PropTypes from 'prop-types';
// Next
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
// Sanity
import { indexQuery } from 'lib/queries/about';
import { getClient } from 'lib/sanity.server';
import { usePreviewSubscription } from 'lib/sanity';

// Styled Comps
import { Title } from '@/components/common/typography';

// Components
import Layout from '@/components/common/layout';
import Container from '@/components/common/layout/Container';
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

function About({ data = {}, preview }) {
  const router = useRouter();

  const {
    data: { aboutPage },
  } = usePreviewSubscription(indexQuery, {
    initialData: data,
    enabled: preview,
  });

  // if (!router.isFallback) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <Layout preview={false}>
      <Container>
        {router.isFallback ? (
          <Title>Loading...</Title>
        ) : (
          <section className="gap-y-20 mb-32 mt-32 grid md:grid-cols-2 md:gap-x-8 md:max-w-[80%] md:gap-y-10 lg:gap-x-10 m-auto sm:grid-col-1 ">
            <Header keywords={aboutPage?.header} />

            <PostBody
              content={aboutPage?.body}
              className="col-span-2 xs:max-w-full sm:max-w-[80%] md:col-start-1 md:col-span-1 md:max-w-[80%]"
            />
          </section>
        )}
      </Container>
    </Layout>
  );
}

export default About;

About.propTypes = {
  data: PropTypes.object,
  preview: PropTypes.bool,
};
