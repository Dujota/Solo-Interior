import PreviewAlert from '../notification/PreviewAlert';
import Footer from './Footer';
import Meta from './Meta';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <PreviewAlert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
