import PropTypes from 'prop-types';
// Next
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
// Sanity
import { indexQuery } from 'lib/queries/about';
import { siteConfigQuery } from 'lib/queries/config';
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
  const config = await getClient(preview).fetch(siteConfigQuery);

  return {
    props: {
      data: {
        aboutPage,
        config,
      },
      preview,
    },
    revalidate: 10,
  };
}

function About({ data = {}, preview }) {
  const router = useRouter();

  const {
    data: { aboutPage, config },
  } = usePreviewSubscription([indexQuery, siteConfigQuery], {
    initialData: data,
    enabled: preview,
  });

  return (
    <Layout preview={false} config={config}>
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
