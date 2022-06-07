import PropTypes from 'prop-types';
// Next
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

// Sanity
import { indexQuery } from 'lib/queries/project';
import { sanityClient, getClient, overlayDrafts } from 'lib/sanity.server';
import { urlForImage, usePreviewSubscription } from 'lib/sanity';

// Styled Comps
import { Heading, Title } from 'components/common/typography';

// Components
import Layout from 'components/common/layout';
import Container from 'components/common/layout/Container';

function Contact({ data = {}, preview }) {
  const router = useRouter();

  // PULL DATA FROM SANITY CONFIG
  // const {
  //   data: { projects },
  // } = usePreviewSubscription(indexQuery, {
  //   params: { slug },
  //   initialData: data,
  //   enabled: preview && slug,
  // });

  // if (!router.isFallback) {
  //   return <ErrorPage statusCode={404} />;
  // }

  return (
    <Layout preview={false}>
      <Container>
        {router.isFallback ? (
          <Title>Loading...</Title>
        ) : (
          <section>
            <Heading>Contact Us</Heading>
          </section>
        )}
      </Container>
    </Layout>
  );
}

export default Contact;

Contact.propTypes = {
  data: PropTypes.object,
  preview: PropTypes.bool,
};
