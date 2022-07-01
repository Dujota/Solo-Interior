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
import ContactDetails from 'components/contact/ContactDetails';
import FooterLinks from 'components/common/layout/Footer/FooterLinks';

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
          <section className="mt-40 md:mt-60 gap-y-20 mb-32 mt-32 grid md:grid-cols-2 md:gap-x-8 md:max-w-[80%] md:gap-y-10 lg:gap-x-10 m-auto sm:grid-col-1 ">
            <h1 className="col-span-2 xs:max-w-full sm:max-w-[80%] md:col-start-1 md:col-span-1 md:max-w-[80%] text-6xl font-bold md:col-span-1 col-span-2">
              {contactPage?.title}
            </h1>
            <ContactDetails address={contactPage.address} email={contactPage.email} phone={contactPage.phone} />
            <div className="md:col-span-1 col-span-2 md:col-start-2">
              <FooterLinks links={config?.socialMediaLinks} />
            </div>
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
