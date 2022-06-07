import PropTypes from 'prop-types';
import PreviewAlert from '../notification/PreviewAlert';
import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar/Navbar';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <PreviewAlert preview={preview} />
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
  preview: PropTypes.bool,
};
