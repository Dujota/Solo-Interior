import Link from 'next/link';
import PropTypes from 'prop-types';
import { NavItem, NavAnchor } from './NavbarStyles';

function NavLink({ href, label }) {
  return (
    <NavItem className="nav-item">
      <Link href={href}>
        <NavAnchor aria-label={label} className="nav-link hover:underline">
          {label}
        </NavAnchor>
      </Link>
    </NavItem>
  );
}

NavLink.propTypes = { href: PropTypes.string, label: PropTypes.string };

export default NavLink;
