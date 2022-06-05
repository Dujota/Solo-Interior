import PropTypes from 'prop-types';
import { NavLogo } from './NavbarStyles';

function Logo({ href, label }) {
  return (
    <NavLogo href={href} className="nav-logo" name={label}>
      {label}
    </NavLogo>
  );
}

Logo.propTypes = { href: PropTypes.string, label: PropTypes.string };

export default Logo;
