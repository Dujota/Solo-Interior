import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from 'lib/sanity';

import PropTypes from 'prop-types';
import { NavLogo, NavLogoWrapper } from './NavbarStyles';

function Logo({ href, label, logo }) {
  return (
    <NavLogoWrapper>
      <Link href={href}>
        <NavLogo className="nav-logo" name={label} aria-label={label}>
          {logo && (
            <Image
              src={urlForImage(logo).url()}
              // layout="fill"
              layout="responsive"
              placeholder="blur"
              blurDataURL="/public/blur.png"
              alt={label}
              width="100%"
              height="100%"
            />
          )}
        </NavLogo>
      </Link>
    </NavLogoWrapper>
  );
}

Logo.propTypes = { href: PropTypes.string, label: PropTypes.string, logo: PropTypes.object };

export default Logo;
