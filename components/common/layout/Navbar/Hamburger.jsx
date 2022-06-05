import PropTypes from 'prop-types';
import { Bar, HamburgerIcon } from './NavbarStyles';

function Hamburger({ toggleMobileMenu, active }) {
  return (
    <HamburgerIcon className="hamburger" onClick={toggleMobileMenu} active={active}>
      <Bar className="bar" />
      <Bar className="bar" />
      <Bar className="bar" />
    </HamburgerIcon>
  );
}

Hamburger.propTypes = {
  toggleMobileMenu: PropTypes.func,
  active: PropTypes.bool,
};
export default Hamburger;
