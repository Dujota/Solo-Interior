import Link from 'next/link';
import PropTypes from 'prop-types';
import PostBody from 'components/projects/PostBody';

// can customize how many paragraphs to display on home page by adding an extra field
export default function AboutHome({ aboutDoc }) {
  return (
    <section>
      <PostBody
        content={aboutDoc?.body.slice(0, 3)}
        className="col-span-2 xs:max-w-full sm:max-w-[80%] md:col-start-1 md:col-span-1 md:max-w-[80%]"
      >
        <Link href="/about">
          <a className="underline">Learn more about me.</a>
        </Link>
      </PostBody>
    </section>
  );
}

AboutHome.propTypes = {
  aboutDoc: PropTypes.object,
};
