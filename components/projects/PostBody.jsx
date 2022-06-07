import PropTypes from 'prop-types';

import { PortableText } from 'lib/sanity';
import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
  return (
    <div className={`max-w-2xl mx-auto ${markdownStyles.markdown}`}>
      <PortableText value={content} />
    </div>
  );
}

PostBody.propTypes = {
  content: PropTypes.string,
};
