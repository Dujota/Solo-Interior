import PropTypes from 'prop-types';

import { NavMenuList } from './NavbarStyles';
import NavLink from './NavLink';

// TODO, grab from site settings or navbar schema
const LINKS = [
  { href: '/projects', name: 'Projects' },
  { href: '/about', name: 'About Us' },
  { href: '/contact', name: 'Contact' },
];

export default function NavMenu({ active }) {
  return (
    <NavMenuList className="nav-menu" active={active}>
      {LINKS.map(({ href, name }) => (
        <NavLink href={href} label={name} />
      ))}
    </NavMenuList>
  );
}

NavMenu.propTypes = { active: PropTypes.bool };
