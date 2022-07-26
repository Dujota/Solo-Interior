import styled, { css } from 'styled-components';

// border-bottom: 1px solid #e2e8f0;
export const Header = styled.header`
  margin-bottom: 7rem;
`;

export const NavBar = styled.nav`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  opacity: 0.9;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 3rem;
  background-color: #ffff;

  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.active &&
      css`
        opacity: 1;
      `}
  }
`;

export const NavLogo = styled.a`
  font-size: 2.5rem;
  font-weight: 800;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      text-decoration: underlined;
    `}
`;

export const NavLogoWrapper = styled.div`
  width: 85px;
`;

export const NavMenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    justify-content: flex-start;
    background-color: #fff;

    width: 100%;
    padding: 2rem;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);

    ${(props) =>
      props.active &&
      css`
        left: 0;
        height: calc(100vh - 4rem);
      `}
  }
`;

export const NavItem = styled.li`
  margin-left: 5rem;

  @media only screen and (max-width: 768px) {
    margin: 2.5rem 0;
  }
`;

export const NavAnchor = styled.a`
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
   {
  }
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    cursor: pointer;

    ${(props) =>
      props.active &&
      css`
        .bar:nth-child(2) {
          opacity: 0;
        }

        .bar:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .bar:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}
  }
`;

export const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
`;
