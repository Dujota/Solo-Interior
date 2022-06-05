import PropTypes from 'prop-types';
import { NavItem, Link } from './NavbarStyles';

function NavLink({ href, label }) {
  return (
    <NavItem className="nav-item">
      <Link href={href} className="nav-link">
        {label}
      </Link>
    </NavItem>
  );
}

NavLink.propTypes = { href: PropTypes.string, label: PropTypes.string };

export default NavLink;
