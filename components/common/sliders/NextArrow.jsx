import PropTypes from 'prop-types';

import { GrNext } from 'react-icons/gr';

export default function NextArrow({ className, style, onClick }) {
  return <GrNext size="large" className={className} style={{ ...style, right: '25px' }} onClick={onClick} />;
}

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
