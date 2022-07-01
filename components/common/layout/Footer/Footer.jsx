import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../Container';
import FooterLinks from './FooterLinks';

const FooterContainer = styled.footer`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
  }

  @media only screen and (min-width: 768px) and (min-height: 1023px) {
    height: 450px;
  }

  @media only screen and (min-width: 768px) and (min-height: 1180px) {
    height: 575px;
  }

  @media only screen and (min-width: 768px) and (min-height: 1368px) {
    height: 750px;
  }
`;

// TODO:
// have links for social media etc, should come from Sanity CMS
export default function Footer({ config }) {
  const { footerText } = config || {};
  return (
    <FooterContainer className="bg-accent-1 border-t border-accent-2 p-7">
      <Container>
        <div className="h-48 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            {footerText}
          </h3>
          <FooterLinks links={config?.socialMediaLinks} />
        </div>
      </Container>
    </FooterContainer>
  );
}

Footer.propTypes = {
  config: PropTypes.object,
};
