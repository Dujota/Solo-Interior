import PropTypes from 'prop-types';

import { PortableText } from 'lib/sanity';
import markdownStyles from './markdown-styles.module.css';

let cssCalss;
export default function PostBody({ content, className, children }) {
  if (className) {
    cssCalss = `max-w-2xl mx-auto ${className} ${markdownStyles.markdown}`;
  } else {
    cssCalss = `max-w-2xl mx-auto ${markdownStyles.markdown}`;
  }

  return (
    <div className={cssCalss}>
      <PortableText value={content} />
      {children}
    </div>
  );
}

PostBody.propTypes = {
  content: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};
