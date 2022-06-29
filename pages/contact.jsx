import PropTypes from 'prop-types';
// Next
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

// Sanity
import { indexQuery } from 'lib/queries/contact';
import { siteConfigQuery } from 'lib/queries/config';
import { sanityClient, getClient, overlayDrafts } from 'lib/sanity.server';
import { urlForImage, usePreviewSubscription } from 'lib/sanity';

// Styled Comps
import { Heading, Title } from 'components/common/typography';

// Components
import Layout from 'components/common/layout';
import Container from 'components/common/layout/Container';

export async function getStaticProps({ params, preview = false }) {
  const contactPage = await getClient(preview).fetch(indexQuery);
  const config = await getClient(preview).fetch(siteConfigQuery);

  return {
    props: {
      data: {
        contactPage,
        config,
      },
      preview,
    },
    revalidate: 10,
  };
}

function Contact({ data = {}, preview }) {
  const router = useRouter();

  const {
    data: { contactPage, config },
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
          <section>
            <Heading>{contactPage?.title}</Heading>
            <p>
              <strong>{contactPage?.excerpt}</strong>
            </p>
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
