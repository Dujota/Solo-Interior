import { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import Logo from './Logo';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

// Styles
import { Header, NavBar } from './NavbarStyles';

// TODO - ADD TO SANITY SITECONFIG
const LOGO_LABEL = 'Solo Interior Design';

function Navbar({ logo }) {
  const [active, setActive] = useState(false);

  const toggleMobileMenu = () => {
    setActive(!active);
  };

  return (
    <Header name="header px-20">
      <NavBar name="Menu" role="navigation" active={active}>
        <Logo href="/" logo={logo} />
        <NavMenu active={active} />
        <Hamburger active={active} toggleMobileMenu={toggleMobileMenu} />
      </NavBar>
    </Header>
  );
}

export default Navbar;

Navbar.propTypes = { logo: PropTypes.object };
