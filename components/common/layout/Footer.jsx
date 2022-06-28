import styled from 'styled-components';
import Container from './Container';

const FooterContainer = styled.footer`
  @media only screen and (max-width: 768px) {
    height: 350px;
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
export default function Footer() {
  return (
    <FooterContainer className="bg-accent-1 border-t border-accent-2 p-7">
      <Container>
        <div className="h-48 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Solo Interior, the european design touch.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="#TODO"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Link 1
            </a>
            <a href="#TODO" className="mx-3 font-bold hover:underline">
              Link 2
            </a>
          </div>
        </div>
      </Container>
    </FooterContainer>
  );
}
