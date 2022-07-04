/* eslint-disable react/prop-types */
import '../styles/tailwind.css';
import '../styles/layout.css';
import '../styles/globals.css';
import '../styles/custom-properties.css';

// you can import these packages anywhere
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

// only initialize when in the browser
if (typeof window !== 'undefined') {
  console.log(LogRocket);
  LogRocket.init('solo-interior/solo-interior');
  // plugins should also only be initialized when in the browser
  setupLogRocketReact(LogRocket);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
