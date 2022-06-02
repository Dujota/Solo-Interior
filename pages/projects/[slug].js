// Next
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';

// Sanity
import { projectQuery, projectSlugsQuery } from '@lib/queries/project';
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

const Project = ({ data = {}, preview = {} }) => {
  const router = useRouter();

  const slug = data?.project?.slug;

  const {
    data: { project, moreProjects },
  } = usePreviewSubscription(projectQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <PageHeader title={project?.slug} />
        {router.isFallback ? (
          <Title>Loading...</Title>
        ) : (
          <>
            <article>
              <Head>
                <title>{project?.title}</title>
                {project?.heroImage && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(project?.heroImage).width(1200).height(627).fit('crop').url()}
                  />
                )}
              </Head>
              <ProjectHeader
                title={project?.title}
                coverImage={project?.heroImage}
                date={project?.date}
                author={project?.author}
              />
            </article>
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  );
};

/**
 * getStaticProps that is called and returns props to the react component before
 * rendering the templates in /pages. This is a perfect place for fetching the data
 * you want for a page. You need to use this in tandem with another special function
 * called getStaticPaths in order to tell Next.js upfront which posts exist.
 *
 *  getStaticProps gets the same information in params. client.fetch() takes two
 * arguments: a query and an object with parameters and values.
 *
 * The GROQ syntax in this tutorial can be read as such:
 *
 *   " * " 👈 select all documents
 * [_type == 'post' && slug.current == $slug] 👈filter the selection down to
 * documents with the type "post" and those of them who have the same slug to that
 * we have in the parameters
 *
 * [0]  👈select the first and only one in that list
 *
 */

export async function getStaticProps({ params, preview = false }) {
  const { project, moreProjects } = await getClient(preview).fetch(projectQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        project,
        moreProjects: overlayDrafts(moreProjects),
      },
    },
  };
}

// It's important to default the slug so that it doesn't return "undefined"
export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(projectSlugsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
};
export default Project;
