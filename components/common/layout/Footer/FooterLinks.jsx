import React from 'react';
import PropTypes from 'prop-types';
import { ImBehance2, ImFacebook2, ImInstagram } from 'react-icons/im';
import Link from 'next/link';

function deriveIcon(type) {
  switch (type) {
    case 'behance':
      return <ImBehance2 />;
    case 'facebook':
      return <ImFacebook2 />;
    case 'instagram':
      return <ImInstagram />;

    default:
      return type;
  }
}

function FooterLinks({ links = [] }) {
  return (
    <div className="flex lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
      {links.map((cta, idx) => (
        <Link href={cta.link} key={idx}>
          <a className="text-3xl mx-3">{deriveIcon(cta.title.toLowerCase())}</a>
        </Link>
      ))}
    </div>
  );
}

FooterLinks.propTypes = { links: PropTypes.array };

export default FooterLinks;

/**
 * <a
        href="#TODO"
        className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
      >
        Link 1
      </a>
      <a href="#TODO" className="mx-3 font-bold hover:underline">
        Link 2
      </a>
 */
