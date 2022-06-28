import PropTypes from 'prop-types';

export default function SectionSeparator({ top = 24, bottom = 24 }) {
  return <hr className={`mt-${top} mb-${bottom}`} />;
}

SectionSeparator.propTypes = {
  top: PropTypes.number,
  bottom: PropTypes.number,
};
