import { useState } from 'react';

// Components
import Logo from './Logo';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

// Styles
import { Header, NavBar } from './NavbarStyles';

// TODO - ADD TO SANITY SITECONFIG
const LOGO_LABEL = 'SI.';

function Navbar(props) {
  const [active, setActive] = useState(false);

  const toggleMobileMenu = () => {
    setActive(!active);
  };

  return (
    <Header name="header">
      <NavBar name="Menu" role="navigation">
        <Logo href="/" label={LOGO_LABEL} />
        <NavMenu active={active} />
        <Hamburger active={active} toggleMobileMenu={toggleMobileMenu} />
      </NavBar>
    </Header>
  );
}

export default Navbar;
