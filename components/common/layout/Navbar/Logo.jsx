import Link from 'next/link';
import PropTypes from 'prop-types';
import { NavLogo } from './NavbarStyles';

function Logo({ href, label }) {
  return (
    <Link href={href}>
      <NavLogo className="nav-logo" name={label} aria-label={label}>
        {label}
      </NavLogo>
    </Link>
  );
}

Logo.propTypes = { href: PropTypes.string, label: PropTypes.string };

export default Logo;
