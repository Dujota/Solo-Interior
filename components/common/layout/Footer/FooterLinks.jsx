import React from 'react';
import PropTypes from 'prop-types';
import { ImBehance2, ImFacebook2, ImInstagram, ImLinkedin } from 'react-icons/im';
import Link from 'next/link';

function deriveIcon(type) {
  switch (type) {
    case 'behance':
      return <ImBehance2 />;
    case 'facebook':
      return <ImFacebook2 />;
    case 'instagram':
      return <ImInstagram />;
    case 'linkedin':
      return <ImLinkedin />;
    default:
      return type;
  }
}

function FooterLinks({ links = [] }) {
  return (
    <div className="flex lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
      {links.map((cta, idx) => (
        <Link href={cta.link} key={idx}>
          <a target="_blank" className="text-3xl mx-3">
            {deriveIcon(cta.title.toLowerCase())}
          </a>
        </Link>
      ))}
    </div>
  );
}

FooterLinks.propTypes = { links: PropTypes.array };

export default FooterLinks;
