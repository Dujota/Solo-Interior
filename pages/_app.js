/* eslint-disable react/prop-types */
import '../styles/tailwind.css';
import '../styles/layout.css';
import '../styles/globals.css';
import '../styles/custom-properties.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
