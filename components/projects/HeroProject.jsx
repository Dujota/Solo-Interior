import Link from 'next/link';
import Date from '../common/Date';
import CoverImage from '../common/imeages/CoverImage';

export default function HeroProject({ title, heroImage, publishedAt, excerpt, slug }) {
  return (
    <section className="hover:drop-shadow-md">
      <div className="mb-4 md:mb-8">
        <CoverImage
          slug={slug}
          title={title}
          image={heroImage}
          size={{
            height: 500,
            width: 2000,
          }}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-4 lg:gap-x-2 mb-4 md:mb-5">
        <div className="mb-4 md:mb-0 text-lg font-bold">
          <Date dateString={publishedAt} />
        </div>

        <h3 className="mb-4 text-4xl font-bold lg:text-4xl leading-tight flex-column">
          <Link href={`/projects/${slug}`}>
            <a className="hover:underline">{title}</a>
          </Link>

          <p className="text-lg leading-relaxed mt-2 mb-4 font-semibold">{excerpt}</p>
        </h3>
      </div>
    </section>
  );
}
